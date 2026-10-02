const intro=document.getElementById('intro');
const seal=document.getElementById('seal');
seal.addEventListener('click',()=>{ intro.classList.add('opened'); setTimeout(()=>intro.style.display='none',1100); });
const target=new Date('2026-10-10T18:00:00+03:00').getTime();
function tick(){const x=Math.max(0,target-Date.now());d.textContent=Math.floor(x/864e5);h.textContent=Math.floor(x%864e5/36e5);m.textContent=Math.floor(x%36e5/6e4);s.textContent=Math.floor(x%6e4/1e3)} tick();setInterval(tick,1000);
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));
const galleryItems=document.querySelectorAll('.gallery figure');
const galleryObserver=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){const items=[...galleryItems];const i=items.indexOf(entry.target);setTimeout(()=>entry.target.classList.add('show'),Math.max(0,i)*90);galleryObserver.unobserve(entry.target)}})},{threshold:.12});
galleryItems.forEach(el=>galleryObserver.observe(el));

// Background music: starts after the guest opens the invitation (browser-friendly).
const bgMusic=document.getElementById('bgMusic'); const musicToggle=document.getElementById('musicToggle');
function startMusic(){ if(!bgMusic) return; bgMusic.volume=.38; bgMusic.play().then(()=>{musicToggle.textContent='❚❚'}).catch(()=>{}); }
document.getElementById('seal')?.addEventListener('click',()=>setTimeout(startMusic,450));
musicToggle?.addEventListener('click',()=>{ if(bgMusic.paused){startMusic()}else{bgMusic.pause();musicToggle.textContent='♫'} });
