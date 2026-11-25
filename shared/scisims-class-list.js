/* SciSims portable class lists v1. No tool-specific or official student data. */
(function(root){
"use strict";
const schema="scisims-class-list",version=1;
function validate(data){
 if(!data||data.schema!==schema||data.version!==version||!Array.isArray(data.students)||!data.students.length||data.students.length>500)throw Error("Invalid SciSims class list (version 1).");
 const seen=new Set(), ids=new Set();
 const students=data.students.map(s=>{
 if(!s||typeof s.name!=="string"||typeof s.id!=="string")throw Error("Each student needs a name and ID.");
 const name=s.name.trim().replace(/\s+/g," "),id=s.id.trim(),key=name.toLocaleLowerCase("en-AU");
 if(!name||name.length>150||/[,;\t\r\n]/.test(s.name)||!id||id.length>150||seen.has(key)||ids.has(id))throw Error("Names and IDs must be unique and valid.");
 seen.add(key);ids.add(id);return {id,name};
 });
 const meta=k=>typeof data[k]==="string"?data[k].trim().slice(0,100):"";
 return {schema,version,className:meta("className"),year:meta("year"),course:meta("course"),students};
}
function make(meta,names,previous){
 const old=new Map((previous?.students||[]).map(s=>[s.name.toLocaleLowerCase("en-AU"),s.id]));
 return validate({schema,version,...meta,students:names.map(name=>({name,id:old.get(name.toLocaleLowerCase("en-AU"))||(root.crypto?.randomUUID?.()||"s-"+Date.now()+"-"+Math.random().toString(36).slice(2))}))});
}
function download(data){const checked=validate(data),url=URL.createObjectURL(new Blob([JSON.stringify(checked,null,2)+"\n"],{type:"application/json"}));const a=document.createElement("a");a.href=url;a.download=(checked.className||"scisims-class").replace(/[^a-z0-9_-]/gi,"-")+".json";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
async function read(file){if(!file||file.size>1000000)throw Error("Choose a JSON file smaller than 1 MB.");return validate(JSON.parse(await file.text()));}
function bind(anchor,adapter){const wrap=document.createElement("div");wrap.style.cssText="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0";const input=document.createElement("input");input.type="file";input.accept=".json,application/json";input.hidden=true;const button=(label,fn)=>{const b=document.createElement("button");b.type="button";b.className="button secondary compact";b.textContent=label;b.onclick=fn;wrap.append(b);};button("Import Class",()=>input.click());button("Export Class",()=>{try{download(adapter.export());}catch(e){alert(e.message);}});input.onchange=async()=>{try{const data=await read(input.files[0]);if(confirm("Import "+(data.className||"class")+" ("+data.students.length+" students)?"))adapter.import(data);}catch(e){alert(e.message);}finally{input.value="";}};wrap.append(input);anchor.after(wrap);}
root.SciSimsClassList={validate,make,download,read,bind};
})(globalThis);
