(function(){
  const key='site-zoom';
  const clamp=(n,min,max)=>Math.min(max,Math.max(min,n));
  const apply=z=>document.documentElement.style.setProperty('--zoom', z);
  const show=z=>{ const el=document.getElementById('zoomDisplay'); if(el) el.textContent=Math.round(z*100)+'%'; };

  let zoom=Number(localStorage.getItem(key) || 1);
  apply(zoom); show(zoom);

  // 點擊 A-/A+
  document.addEventListener('click', (e)=>{
    if (!(e.target instanceof HTMLElement)) return;
    if (e.target.id === 'smaller') { zoom=clamp(+(zoom-0.1).toFixed(2),0.8,1.4); localStorage.setItem(key,zoom); apply(zoom); show(zoom); }
    if (e.target.id === 'bigger')  { zoom=clamp(+(zoom+0.1).toFixed(2),0.8,1.4); localStorage.setItem(key,zoom); apply(zoom); show(zoom); }
  });

  // 滑鼠滾輪（只在面板上生效）
  document.addEventListener('wheel', (e)=>{
    const panel = e.target && (e.target.closest && e.target.closest('.dock-panel'));
    if (!panel) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.05 : 0.05;
    zoom = clamp(+(zoom + delta).toFixed(2), 0.8, 1.4);
    localStorage.setItem(key, zoom); apply(zoom); show(zoom);
  }, { passive: false });

  // 鍵盤快捷：+ / -
  document.addEventListener('keydown', (e)=>{
    if (e.key === '+' || e.key === '=') { zoom=clamp(+(zoom+0.1).toFixed(2),0.8,1.4); localStorage.setItem(key,zoom); apply(zoom); show(zoom); }
    if (e.key === '-' || e.key === '_') { zoom=clamp(+(zoom-0.1).toFixed(2),0.8,1.4); localStorage.setItem(key,zoom); apply(zoom); show(zoom); }
  });

  // 供你檢查是否載入
  window.__fontdock_loaded = true;
})();
