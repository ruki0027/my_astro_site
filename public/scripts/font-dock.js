(function(){
  const key='site-zoom';
  const clamp=(n,min,max)=>Math.min(max,Math.max(min,n));
  const apply=z=>document.documentElement.style.setProperty('--zoom', z);
  const show=z=>{ const el=document.getElementById('zoomDisplay'); if(el) el.textContent=Math.round(z*100)+'%'; };

  let zoom=Number(localStorage.getItem(key) || 1);
  apply(zoom); show(zoom);

  document.addEventListener('click', (e)=>{
    if (!(e.target instanceof HTMLElement)) return;
    if (e.target.id === 'smaller') { zoom=clamp(+(zoom-0.1).toFixed(2),0.8,1.4); localStorage.setItem(key,zoom); apply(zoom); show(zoom); }
    if (e.target.id === 'bigger') { zoom=clamp(+(zoom+0.1).toFixed(2),0.8,1.4); localStorage.setItem(key,zoom); apply(zoom); show(zoom); }
  });
})();