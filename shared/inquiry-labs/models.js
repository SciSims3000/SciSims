/* SciSims Inquiry Labs 1.0.0 — pure, testable teaching models */
(function(root){
'use strict';
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
function rng(seed){let a=Number(seed)>>>0;return()=>{a+=0x6D2B79F5;let t=a;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};}
const optics={fov:objective=>18000/objective,total:(objective,eyepiece)=>objective*eyepiece,resolution:na=>0.61*0.55/na,measure:(a,b,fov)=>Math.abs(b-a)*fov};
function heat(c){
 const wall=120/c.r,roof=80/c.r,window=12*c.u,vent=1.2*1005*200*c.ach/3600;
 const H=wall+roof+window+vent,solar=12*c.sun*c.g*(1-c.shade),C=c.mass*1e6;
 const equilibrium=c.out+solar/H;
 const points=Array.from({length:73},(_,i)=>{const hour=i/6;return {hour,temp:equilibrium+(c.start-equilibrium)*Math.exp(-H*hour*3600/C)};});
 return {points,H,solar,wall,roof,window,vent,equilibrium,final:points[72].temp};
}
function population(pattern,seed){const r=rng(seed);return Array.from({length:400},(_,i)=>{let row=Math.floor(i/20),col=i%20,p=pattern==='gradient'?0.12+0.75*row/19:pattern==='periodic'?(col%4===0?0.95:0.12):0.45;return {id:i,row,col,target:r()<p};});}
function sample(pop,method,n,random){n=clamp(Math.floor(n),1,pop.length);let ids=[];
 if(method==='random'){ids=pop.map((_,i)=>i);for(let i=ids.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[ids[i],ids[j]]=[ids[j],ids[i]];}ids=ids.slice(0,n);}
 else if(method==='systematic'){const k=pop.length/n,start=random()*k;ids=Array.from({length:n},(_,i)=>Math.floor(start+i*k));}
 else {ids=Array.from({length:n},(_,i)=>i);}
 const hits=ids.reduce((a,i)=>a+Number(pop[i].target),0),truth=pop.filter(p=>p.target).length/pop.length*100;
 return {ids,hits,n,estimate:100*hits/n,truth,error:100*hits/n-truth};
}
function stats(rows){if(!rows.length)return null;const mean=rows.reduce((a,r)=>a+r.estimate,0)/rows.length;return {mean,bias:rows.reduce((a,r)=>a+r.error,0)/rows.length,sd:Math.sqrt(rows.reduce((a,r)=>a+(r.estimate-mean)**2,0)/rows.length)};}
const materials={iron:{name:'Iron filings',colour:'#748596',property:'Magnetic; insoluble in water; fine solid.'},sand:{name:'Sand',colour:'#dfb875',property:'Not magnetic; insoluble in water; fine grains retained by filter paper.'},salt:{name:'Salt',colour:'#edf2fa',property:'Not magnetic; dissolves in sufficient water; dissolved particles pass through filter paper.'},gravel:{name:'Gravel',colour:'#9c8b84',property:'Not magnetic; insoluble; pieces larger than the sieve openings.'},water:{name:'Water',colour:'#47b7ee',property:'Liquid; dissolves salt; immiscible with oil; can be collected by condensation.'},oil:{name:'Oil',colour:'#e3c14e',property:'Liquid; immiscible with water; less dense than water; forms the upper layer.'}};
const scenarios=[{name:'Rock-salt rescue',mix:{salt:10,sand:20},targets:['salt','sand'],brief:'Recover dry salt and sand as separate fractions. You may add water.'},{name:'Recycling bench',mix:{iron:15,sand:20,gravel:30},targets:['iron','sand','gravel'],brief:'Recover all three solid components separately.'},{name:'Recover the water',mix:{salt:10,sand:20,water:100},targets:['salt','sand','water'],brief:'Recover salt, sand AND water separately. Losing water to the air will prevent complete recovery.'},{name:'Layered mystery',mix:{oil:30,water:100,salt:10,sand:20},targets:['oil','water','salt','sand'],brief:'Recover every component. Inspect the mixture and plan a sequence before acting.'}];
const mass=m=>Object.values(m).reduce((a,b)=>a+b,0);
function separate(mix,action){const m={...mix},parts=[],take=(keys,label)=>{const p={};for(const k of keys){if(m[k]){p[k]=m[k];delete m[k];}}if(mass(p))parts.push({label,mix:p});};let lost=0,added=0,note='';
 if(action==='water'){if(m.water)return {error:'This fraction already contains water; no more is needed in these missions.'};m.water=100;added=100;note='Added 100 g of water and stirred. Salt dissolves in this model.';}
 else if(action==='magnet'){if(!m.iron)return {error:'No magnetic component is present in this fraction.'};take(['iron'],'Magnetic fraction');note='Iron is attracted to the magnet; the other components remain.';}
 else if(action==='sieve'){if(m.water||m.oil)return {error:'Use the dry sieve on a dry mixture in this model.'};if(!m.gravel)return {error:'No pieces are large enough to be retained by this sieve.'};take(['gravel'],'Sieve residue');note='Gravel is larger than the sieve openings. The smaller grains pass through.';}
 else if(action==='filter'){if(!m.water)return {error:'Filtration here requires an aqueous mixture. Dissolve salt first if separating dry salt and sand.'};if(m.oil)return {error:'Oil is not reliably separated from water by ordinary filter paper. Separate the liquid layers first in this model.'};if(!m.sand&&!m.gravel&&!m.iron)return {error:'There are no insoluble solids to retain. Dissolved salt passes through filter paper.'};take(['sand','gravel','iron'],'Filter residue');note='Insoluble solids are retained. Water and dissolved salt pass into the filtrate. Residue is idealised as dry.';}
 else if(action==='funnel'){if(!m.oil||!m.water)return {error:'A separating funnel needs two immiscible liquid layers.'};if(m.sand||m.gravel||m.iron){note='The oil layer is isolated. In this simplified model, settled solids remain with the aqueous layer.';}else note='Oil and water form separate layers. Dissolved salt remains in the aqueous layer.';take(['oil'],'Oil layer');}
 else if(action==='evaporate'||action==='distil'){if(!m.water)return {error:'There is no water to remove in this fraction.'};if(m.oil)return {error:'Separate the oil layer before heating in this model.'};if(action==='evaporate'){lost=m.water;delete m.water;note='Water escapes as vapour; non-volatile solids remain. Water has not been recovered.';}else{take(['water'],'Condensed water');note='Water vaporises then condenses into a separate receiver; non-volatile solids remain.';}}
 else return {error:'Unknown technique.'};
 if(mass(m))parts.push({label:action==='filter'?'Filtrate':'Remaining fraction',mix:m});return {parts,lost,added,note};}
const api={clamp,rng,optics,heat,population,sample,stats,materials,scenarios,mass,separate};if(typeof module!=='undefined'&&module.exports)module.exports=api;root.LabModels=api;
})(typeof window==='undefined'?globalThis:window);
