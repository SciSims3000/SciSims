(() => {
  const tracks = ['slowly - ocean song.mp3','slowly cosmic.mp3','slowly full.mp3','slowly pink noise.mp3','slowly rain.mp3','slowly universe.mp3','slowly woodlands.mp3','slowly.mp3','slowly2.mp3'];
  const names = ['Ocean Song','Cosmic','Full','Pink Noise','Rain','Universe','Woodlands','Slowly','Slowly 2'];
  const controls = document.getElementById('controls');
  if (!controls) return;
  const section = document.createElement('section');
  section.className = 'section';
  section.setAttribute('aria-label','Science in a Hurry music');
  section.innerHTML = '<label class="section-label" for="driftMusic">Science in a Hurry · ambient music</label><div style="display:flex;gap:8px"><select id="driftMusic" style="flex:1;min-width:0"></select><button id="driftMusicPlay" type="button" class="mode-button" style="background:var(--accent-soft);min-width:62px">Play</button></div><div style="display:flex;align-items:center;gap:10px;margin-top:9px"><label for="driftMusicVolume" style="font-size:11px">Volume</label><input id="driftMusicVolume" type="range" min="0" max="100" value="30" style="flex:1;accent-color:var(--accent)"></div><div id="driftMusicStatus" role="status" style="font-size:10px;color:var(--muted);margin-top:5px">Music off · independent of scenes</div>';
  const credit = controls.querySelector('.audio-credit');
  controls.insertBefore(section,credit);
  const select = section.querySelector('#driftMusic'), button = section.querySelector('#driftMusicPlay'), volume = section.querySelector('#driftMusicVolume'), status = section.querySelector('#driftMusicStatus');
  names.forEach((name,i) => select.add(new Option(name,String(i))));
  const player = new Audio();
  player.preload = 'none';
  let playing = false;
  try {
    const savedVolume = Number(localStorage.getItem('drift-music-volume'));
    if (localStorage.getItem('drift-music-volume') !== null && Number.isFinite(savedVolume)) volume.value = Math.max(0,Math.min(100,savedVolume));
    const savedTrack = Number(localStorage.getItem('drift-music-track'));
    if (localStorage.getItem('drift-music-track') !== null && Number.isInteger(savedTrack) && savedTrack >= 0 && savedTrack < tracks.length) select.value = String(savedTrack);
  } catch (_) {}
  player.volume = Number(volume.value)/100;
  function load() {
    player.src = 'audio/' + encodeURIComponent(tracks[Number(select.value)]);
    player.load();
    try { localStorage.setItem('drift-music-track',select.value); } catch (_) {}
  }
  function play() {
    if (!player.getAttribute('src')) load();
    playing = true;
    button.textContent = 'Pause';
    status.textContent = 'Loading · ' + names[Number(select.value)];
    const p=player.play();
    if(p) p.then(()=>{if(playing) status.textContent='Playing · '+names[Number(select.value)];}).catch(e=>{
      if(e.name==='AbortError') return;
      playing=false;button.textContent='Play';status.textContent='Could not load audio';
    });
  }
  button.addEventListener('click',()=>{
    if(playing){playing=false;player.pause();button.textContent='Play';status.textContent='Paused';}
    else play();
  });
  select.addEventListener('change',()=>{
    const resume=playing;player.pause();load();
    if(resume)play();else status.textContent='Selected · '+names[Number(select.value)];
  });
  volume.addEventListener('input',()=>{
    player.volume=Number(volume.value)/100;
    try{localStorage.setItem('drift-music-volume',volume.value);}catch(_){}
  });
  player.addEventListener('ended',()=>{
    if(!playing)return;
    select.value=String((Number(select.value)+1)%tracks.length);
    load();play();
  });
  player.addEventListener('error',()=>{
    if(!playing)return;
    playing=false;button.textContent='Play';status.textContent='Audio file unavailable';
  });
})();