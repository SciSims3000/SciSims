const APP_VERSION="0.4.2";
const STORAGE_PREFIX="studyboard3000:";
const ACCESS_SESSION_KEY="studyboard3000:access-mode";

let appConfig=null;
let boardConfig=null;
let accessConfig=null;
let template=null;
let instanceData=null;
let currentBoard=null;
let currentTab=null;
let currentFlashcards=[];
let accessMode=sessionStorage.getItem(ACCESS_SESSION_KEY)||"guest";

const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
const now=()=>new Date().toISOString();
const uid=(prefix="id")=>`${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`;

async function loadJSON(path){
  const res=await fetch(path,{cache:"no-store"});
  if(!res.ok)throw new Error(`${path}: HTTP ${res.status}`);
  return await res.json();
}

function validateRequired(obj,fields,label){
  const missing=fields.filter(k=>obj?.[k]===undefined);
  if(missing.length)throw new Error(`${label} is missing required field(s): ${missing.join(", ")}`);
}

function validateConfigs(){
  validateRequired(appConfig,["appName","boardsFile"],"app.json");
  validateRequired(boardConfig,["schemaVersion","boards"],"boards.json");
  validateRequired(accessConfig,["schemaVersion","profiles"],"access.json");
  validateRequired(template,["schemaVersion","template","navigation","sections"],"template JSON");
  validateRequired(instanceData,["schemaVersion","instance","entries","reactions"],"instance JSON");
}

function boardFromURL(){
  const boards=boardConfig?.boards;
  if(!Array.isArray(boards)){
    throw new Error("config/boards.json must contain a top-level boards array.");
  }
  const id=new URLSearchParams(location.search).get("board");
  return boards.find(b=>b.id===id)||boards.find(b=>b.default)||boards[0];
}

function storageKey(){return `${STORAGE_PREFIX}${currentBoard.id}:instance-data`}

function mergeLocalInstanceData(source){
  const raw=localStorage.getItem(storageKey());
  if(!raw)return source;
  try{
    const local=JSON.parse(raw);
    return migrateInstanceData(local);
  }catch(e){
    console.warn("Invalid local data ignored",e);
    return source;
  }
}

function migrateInstanceData(data){
  if(data.schemaVersion==="1.0.0")return data;
  // Best-effort migration from earlier SciBoard object-of-arrays format.
  if(data.notes||data.teacherNotes){
    const entries=[];
    Object.entries(data.notes||{}).forEach(([nodeId,notes])=>{
      (notes||[]).forEach(n=>entries.push({
        id:n.id||uid("entry"),nodeId,parentEntryId:null,
        entryType:mapLegacyType(n.type),
        author:authorFromLegacy(n.author,"student"),
        body:n.text||n.body||"",createdAt:n.createdAt||now(),updatedAt:n.updatedAt||n.createdAt||now(),
        status:"published",curation:{isTeacherRecommended:!!n.pinned,promotedFromEntryId:null,curatedBy:null,curatedAt:null,reason:""},
        tags:[],sourceLinks:[],flashcardEligible:true,studyBuddyEligible:true
      }));
    });
    Object.entries(data.teacherNotes||{}).forEach(([nodeId,notes])=>{
      (notes||[]).forEach(n=>entries.push({
        id:n.id||uid("entry"),nodeId,parentEntryId:null,entryType:"teacher-highlight",
        author:authorFromLegacy(n.author||"Teacher","teacher"),body:n.text||n.body||"",
        createdAt:n.createdAt||now(),updatedAt:n.updatedAt||n.createdAt||now(),status:"published",
        curation:{isTeacherRecommended:true,promotedFromEntryId:n.promotedFrom||null,curatedBy:"Teacher",curatedAt:n.createdAt||now(),reason:"Migrated teacher highlight."},
        tags:[],sourceLinks:[],flashcardEligible:true,studyBuddyEligible:true
      }));
    });
    return {
      schemaVersion:"1.0.0",
      instance:{id:currentBoard.id,label:currentBoard.label,templateId:template.template.id,year:String(new Date().getFullYear()),updatedAt:now()},
      entries,reactions:[]
    };
  }
  throw new Error(`Unsupported instance schema version: ${data.schemaVersion||"unknown"}`);
}

function mapLegacyType(t){
  return ({note:"community-note","exam-tip":"exam-tip",definition:"definition",example:"example",question:"question",misconception:"misconception"}[t]||"community-note");
}

function authorFromLegacy(name,role){
  const displayName=String(name||role);
  const initials=displayName.split(/\s+/).map(x=>x[0]).join("").slice(0,3).toUpperCase();
  return {id:uid(role),displayName,firstName:"",lastInitial:"",className:"",role,avatarInitials:initials||"?",avatarColour:colourFromText(displayName)};
}

function colourFromText(text){
  let h=0;for(const c of text)h=(h*31+c.charCodeAt(0))%360;
  return `hsl(${h} 42% 43%)`;
}

async function start(){
  try{
    appConfig=await loadJSON("config/app.json");
    boardConfig=await loadJSON(appConfig.boardsFile);
    validateRequired(boardConfig,["schemaVersion","boards"],"boards.json");
    accessConfig=await loadJSON(appConfig.accessFile);
    validateRequired(accessConfig,["schemaVersion","profiles"],"access.json");
    currentBoard=boardFromURL();
    if(!currentBoard)throw new Error("No boards are configured.");
    await loadBoard(currentBoard);
    $("#startup").hidden=true;
    $("#appShell").hidden=false;
  }catch(err){showFatal(err)}
}

async function loadBoard(board){
  currentBoard=board;
  $("#startupMessage").textContent=`Loading ${board.label}…`;
  template=await loadJSON(board.templateFile);
  instanceData=migrateInstanceData(await loadJSON(board.instanceFile));
  instanceData=mergeLocalInstanceData(instanceData);
  validateConfigs();
  currentTab=template.navigation.find(n=>n.visible!==false)?.id;
  setTheme();
  applyAccess();
  renderAll();
  updateURL();
}

function setTheme(){
  const accent=template.template.theme?.defaultAccent||"#356b6f";
  document.documentElement.style.setProperty("--accent",accent);
  document.documentElement.style.setProperty("--accent-soft",template.template.theme?.defaultSoft||"#e5f0f0");
}

function updateURL(){
  const u=new URL(location.href);u.searchParams.set("board",currentBoard.id);history.replaceState(null,"",u);
}

function applyAccess(){
  document.body.classList.remove("mode-guest","mode-student","mode-teacher");
  document.body.classList.add(`mode-${accessMode}`);
  $("#accessBadge").textContent={guest:"🔎 Guest mode",student:"🧑‍🎓 Student mode",teacher:"🔐 Teacher mode"}[accessMode];
  sessionStorage.setItem(ACCESS_SESSION_KEY,accessMode);
}

function renderAll(){
  $("#appTitle").textContent=template.template.title||appConfig.appName;
  $("#appSubtitle").textContent=template.template.subtitle||currentBoard.label;
  renderBoardList();renderTabs();renderMeta();renderContent();
}

function renderBoardList(){
  $("#boardList").innerHTML=boardConfig.boards.map(b=>`
    <button type="button" class="board-card" data-board-id="${esc(b.id)}">
      <strong>${esc(b.label)}</strong>
      <span>${esc(b.description||"")}</span>
    </button>`).join("");
  $$("[data-board-id]").forEach(btn=>btn.onclick=async()=>{
    $("#boardDialog").close();
    await loadBoard(boardConfig.boards.find(b=>b.id===btn.dataset.boardId));
  });
}

function renderTabs(){
  $("#tabs").innerHTML=template.navigation.filter(n=>n.visible!==false).sort((a,b)=>a.order-b.order).map(n=>`
    <button data-tab="${esc(n.id)}" class="${n.id===currentTab?"active":""}">${esc(n.label)}</button>`).join("");
  $$("[data-tab]").forEach(btn=>btn.onclick=()=>{currentTab=btn.dataset.tab;renderTabs();renderContent()});
}

function renderMeta(){
  const c=template.template;
  $("#boardMeta").innerHTML=`<h2>${esc(c.title)}</h2><div>${esc(c.faculty||"")} · ${esc(c.yearLevel||"")} · ${esc(c.jurisdiction||"")}</div>`;
}

function activeSection(){
  const nav=template.navigation.find(n=>n.id===currentTab);
  return template.sections.find(s=>s.id===nav?.sectionId);
}
function getOpenInquiryIds(){
  return [...document.querySelectorAll("details.inquiry[open]")]
    .map(details => details.dataset.inquiryId)
    .filter(Boolean);
}

function restoreOpenInquiryIds(openInquiryIds){
  openInquiryIds.forEach(inquiryId => {
    const details = document.querySelector(
      `details.inquiry[data-inquiry-id="${CSS.escape(inquiryId)}"]`
    );

    if(details){
      details.open = true;
    }
  });
}
function renderContent(options={}){
  const openInquiryIds = options.openInquiryIds || getOpenInquiryIds();

  const section=activeSection();
  const q=$("#searchInput").value.trim().toLowerCase();

  if(!section){
    $("#content").innerHTML="<section class='panel'>No section found.</section>";
    return;
  }

  const nodes=section.nodes||[];
  const roots=nodes
    .filter(n=>!n.parentId)
    .sort((a,b)=>a.order-b.order);

  $("#content").innerHTML=`<section class="section">
    <header class="section-heading">
      <h2>${esc(section.title)}</h2>
      <p>${esc(section.subtitle||"")}</p>
    </header>
    ${roots.map(n=>renderNode(n,nodes,q)).join("")}
  </section>`;

  bindDynamicActions();
  restoreOpenInquiryIds(openInquiryIds);
}

function renderNode(node,nodes,q){
  const children=nodes.filter(n=>n.parentId===node.id).sort((a,b)=>a.order-b.order);
  const hay=[node.title,node.subtitle,node.content,...entriesForNode(node.id).map(e=>e.body)].join(" ").toLowerCase();
  const childHTML=children.map(n=>renderNode(n,nodes,q)).join("");
  if(q && !hay.includes(q) && !childHTML.includes("outcome-card"))return "";
  if(node.nodeType==="inquiry-question"){
return `<details
  class="inquiry"
  data-inquiry-id="${esc(node.id)}"
  ${node.collapsedByDefault===false?"open":""}
>
  <summary>${esc(node.title)}</summary>
  <div class="node-list">${childHTML}</div>
</details>`;
  }
  if(node.nodeType==="outcome-card"||node.nodeType==="glossary-term"||node.nodeType==="custom"){
    return renderOutcome(node);
  }
  if(node.nodeType==="instructions-block"){
    return `<section class="panel">${node.content||""}</section>`;
  }
  return childHTML;
}

function entriesForNode(nodeId){
  return (instanceData.entries||[]).filter(e=>e.nodeId===nodeId&&e.status==="published");
}

function reactionCount(entryId,type){
  return (instanceData.reactions||[]).find(r=>r.entryId===entryId&&r.reactionType===type)?.count||0;
}

function renderOutcome(node){
  const all=entriesForNode(node.id);
  const highlights=all.filter(e=>e.entryType==="teacher-highlight"&&!e.parentEntryId);
  const community=all.filter(e=>e.entryType!=="teacher-highlight"&&!e.parentEntryId);
  return `<article class="outcome-card" data-node="${esc(node.id)}">
    <div class="outcome-title">
      <h3>${esc(node.title)}</h3>
      <div class="outcome-meta">${esc((node.outcomeCodes||[]).join(", "))} · ${all.length} entries</div>
    </div>
    <section class="teacher-highlights">
      <h4>🟨 Teacher Highlights</h4>
      ${highlights.map(e=>renderEntry(e,true)).join("")||'<div class="teacher-empty">No Teacher Highlights have been added yet.</div>'}
      <div class="teacher-only block teacher-composer">
        <button data-add-highlight="${esc(node.id)}">+ Add Teacher Highlight</button>
      </div>
    </section>
    <section class="community-section">
      <h4>💬 Community Notes</h4>
      ${community.map(e=>renderEntry(e,false)).join("")||'<div class="empty">No community notes yet.</div>'}
      <div class="composer student-only block">
        <select data-entry-type>
          <option value="community-note">Community note</option><option value="definition">Definition</option>
          <option value="example">Example</option><option value="question">Question</option>
          <option value="misconception">Misconception</option><option value="exam-tip">Exam tip</option>
        </select>
        <input data-author placeholder="First name, last initial and class">
        <textarea data-body placeholder="Add a useful contribution…"></textarea>
        <button data-add-entry="${esc(node.id)}">+ Add note</button>
      </div>
    </section>
  </article>`;
}

function renderEntry(entry,isTeacher,depth=0){
  const replies=(instanceData.entries||[]).filter(e=>e.parentEntryId===entry.id&&e.status==="published");
  const attr=entry.author||authorFromLegacy("Unknown","student");
  const promoted=entry.curation?.promotedFromEntryId?`<span>Promoted from a student contribution</span>`:"";
  return `<div class="note ${isTeacher?"teacher":""} ${depth?"reply":""}">
    <div class="note-head">
      <div class="author"><span class="avatar" style="background:${esc(attr.avatarColour||colourFromText(attr.displayName))}">${esc(attr.avatarInitials||"?")}</span>${esc(attr.displayName)}</div>
      <span class="note-type">${esc(entry.entryType.replaceAll("-"," "))}</span>
    </div>
    <div class="note-body">${esc(entry.body)}</div>
    <div class="note-foot"><span>${new Date(entry.createdAt).toLocaleString()}</span>${promoted}</div>
    <div class="note-actions">
      <button class="student-only" data-react="${entry.id}" data-reaction="helpful">Helpful ${reactionCount(entry.id,"helpful")}</button>
      <button class="student-only" data-reply="${entry.id}" data-node-id="${entry.nodeId}">Reply</button>
      ${!isTeacher?`<button class="teacher-only" data-promote="${entry.id}">Promote</button>`:""}
      <button class="teacher-only" data-delete-entry="${entry.id}">Delete</button>
    </div>
    ${replies.map(r=>renderEntry(r,r.entryType==="teacher-highlight",depth+1)).join("")}
  </div>`;
}

function bindDynamicActions(){
  $$("[data-add-entry]").forEach(b=>b.onclick=()=>addEntryFromComposer(b));
  $$("[data-add-highlight]").forEach(b=>b.onclick=()=>addHighlight(b.dataset.addHighlight));
  $$("[data-react]").forEach(b=>b.onclick=()=>react(b.dataset.react,b.dataset.reaction));
  $$("[data-reply]").forEach(b=>b.onclick=()=>replyTo(b.dataset.reply,b.dataset.nodeId));
  $$("[data-promote]").forEach(b=>b.onclick=()=>promote(b.dataset.promote));
  $$("[data-delete-entry]").forEach(b=>b.onclick=()=>deleteEntry(b.dataset.deleteEntry));
}

function addEntryFromComposer(button){
  if(!["student","teacher"].includes(accessMode))return;

  const card=button.closest(".outcome-card");
  const inquiry=button.closest("details.inquiry");
  const inquiryId=inquiry?.dataset.inquiryId;

  const type=card.querySelector("[data-entry-type]").value;
  const authorName=card.querySelector("[data-author]").value.trim();
  const body=card.querySelector("[data-body]").value.trim();

  if(!authorName||!body){
    alert("Add your name/class and a note.");
    return;
  }

  const openInquiryIds=getOpenInquiryIds();

  if(inquiryId && !openInquiryIds.includes(inquiryId)){
    openInquiryIds.push(inquiryId);
  }

  instanceData.entries.push(
    makeEntry(
      button.dataset.addEntry,
      type,
      authorName,
      body,
      null
    )
  );

  persist();
  renderContent({openInquiryIds});
}

function makeEntry(nodeId,type,authorName,body,parentEntryId){
  return {
    id:uid("entry"),nodeId,parentEntryId:parentEntryId||null,entryType:type,
    author:authorFromLegacy(authorName,accessMode==="teacher"?"teacher":"student"),
    body,createdAt:now(),updatedAt:now(),status:"published",
    curation:{isTeacherRecommended:false,promotedFromEntryId:null,curatedBy:null,curatedAt:null,reason:""},
    tags:[],sourceLinks:[],flashcardEligible:true,studyBuddyEligible:true
  };
}

function addHighlight(nodeId){
  if(accessMode!=="teacher")return;

  const openInquiryIds=getOpenInquiryIds();
  const body=prompt("Teacher Highlight:");

  if(!body?.trim())return;

  instanceData.entries.push(
    makeEntry(
      nodeId,
      "teacher-highlight",
      "Teacher",
      body.trim(),
      null
    )
  );

  persist();
  renderContent({openInquiryIds});
}

function replyTo(parentEntryId,nodeId){
  if(!["student","teacher"].includes(accessMode))return;

  const openInquiryIds=getOpenInquiryIds();

  const author=prompt("Your first name, last initial and instance:");
  if(!author?.trim())return;

  const body=prompt("Reply:");
  if(!body?.trim())return;

  instanceData.entries.push(
    makeEntry(
      nodeId,
      "community-note",
      author.trim(),
      body.trim(),
      parentEntryId
    )
  );

  persist();
  renderContent({openInquiryIds});
}

function promote(entryId){
  if(accessMode!=="teacher")return;
  const source=instanceData.entries.find(e=>e.id===entryId);
  if(!source)return;
  const copy=structuredClone(source);
  copy.id=uid("entry");copy.entryType="teacher-highlight";copy.parentEntryId=null;
  copy.author=authorFromLegacy("Teacher","teacher");
  copy.createdAt=copy.updatedAt=now();
  copy.curation={isTeacherRecommended:true,promotedFromEntryId:source.id,curatedBy:"Teacher",curatedAt:now(),reason:"Promoted from community contribution."};
  instanceData.entries.push(copy);
  persist();renderContent();
}

function react(entryId,type){
  if(!["student","teacher"].includes(accessMode))return;
  let r=instanceData.reactions.find(x=>x.entryId===entryId&&x.reactionType===type);
  if(!r){r={entryId,reactionType:type,count:0,reactorIds:[]};instanceData.reactions.push(r)}
  r.count+=1;persist();renderContent();
}

function deleteEntry(entryId){
  if(accessMode!=="teacher")return;
  const e=instanceData.entries.find(x=>x.id===entryId);
  if(e&&confirm("Delete this entry?")){e.status="deleted";e.updatedAt=now();persist();renderContent()}
}

function persist(){
  instanceData.instance.updatedAt=now();
  localStorage.setItem(storageKey(),JSON.stringify(instanceData));
}

async function checkPassword(mode,password){
  const profile=accessConfig.profiles[currentBoard.accessProfile];
  if(!profile)throw new Error(`Access profile not found: ${currentBoard.accessProfile}`);
  const value=profile[`${mode}PasswordHash`];
  if(!value)return false;
  const digest=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(password));
  const hex=[...new Uint8Array(digest)].map(b=>b.toString(16).padStart(2,"0")).join("");
  return hex===value;
}

async function unlock(){
  const mode=$("#passwordArea").dataset.mode;
  try{
    const ok=await checkPassword(mode,$("#passwordInput").value);
    if(!ok){$("#accessMessage").textContent="Incorrect password.";return}
    accessMode=mode;applyAccess();$("#accessDialog").close();renderContent();
  }catch(e){$("#accessMessage").textContent=e.message}
}

function generateFlashcards(){
  const section=activeSection();
  const nodeMap=new Map((section?.nodes||[]).map(n=>[n.id,n]));
  currentFlashcards=(instanceData.entries||[])
    .filter(e=>e.status==="published"&&e.flashcardEligible&&["definition","example","exam-tip","teacher-highlight"].includes(e.entryType))
    .map(e=>({
      id:uid("card"),
      front:nodeMap.get(e.nodeId)?.title||"StudyBoard note",
      back:e.body,
      tags:[...(e.tags||[]),e.entryType,...(nodeMap.get(e.nodeId)?.outcomeCodes||[])],
      source:{entryId:e.id,author:e.author?.displayName||"",boardId:currentBoard.id}
    }));
  $("#flashcards").innerHTML=currentFlashcards.map(c=>`<div class="flashcard"><strong>${esc(c.front)}</strong><div>${esc(c.back)}</div></div>`).join("")||"<p>No eligible entries yet.</p>";
  $("#flashDialog").showModal();
}

function downloadJSON(obj,name){
  const blob=new Blob([JSON.stringify(obj,null,2)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;a.click();URL.revokeObjectURL(a.href);
}

function exportInstance(){downloadJSON(instanceData,`${currentBoard.id}-instance-data.json`)}

function importInstance(file){
  const reader=new FileReader();
  reader.onload=()=>{
    try{instanceData=migrateInstanceData(JSON.parse(reader.result));validateConfigs();persist();renderAll()}
    catch(e){alert(`Import failed: ${e.message}`)}
  };
  reader.readAsText(file);
}

function showFatal(error){
  console.error(error);
  const node=$("#errorTemplate").content.cloneNode(true);
  node.querySelector("pre").textContent=error.stack||error.message||String(error);
  $("#startup").replaceWith(node);
}

$("#boardPickerBtn").onclick=()=>$("#boardDialog").showModal();
$("#accessBtn").onclick=()=>$("#accessDialog").showModal();
$$("[data-mode]").forEach(btn=>btn.onclick=()=>{
  const mode=btn.dataset.mode;
  if(mode==="guest"){accessMode="guest";applyAccess();$("#accessDialog").close();renderContent();return}
  $("#passwordArea").hidden=false;$("#passwordArea").dataset.mode=mode;
  $("#passwordLabel").textContent=`${mode[0].toUpperCase()+mode.slice(1)} password`;
  $("#passwordInput").value="";$("#accessMessage").textContent="";$("#passwordInput").focus();
});
$("#unlockBtn").onclick=unlock;
$("#passwordInput").onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();unlock()}};
$("#searchInput").oninput=renderContent;
$("#printBtn").onclick=()=>print();
$("#flashBtn").onclick=generateFlashcards;
$("#downloadFlashBtn").onclick=()=>downloadJSON(currentFlashcards,`${currentBoard.id}-flashcards.json`);
$("#exportBtn").onclick=exportInstance;
$("#importFile").onchange=e=>e.target.files[0]&&importInstance(e.target.files[0]);
$("#resetBtn").onclick=()=>{if(confirm("Reset local instance data to the packaged starter file?")){localStorage.removeItem(storageKey());location.reload()}};

start();
