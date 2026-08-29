(function(){
  if(window.__CASASTUDENT_CITY_VISUALS__) return;
  window.__CASASTUDENT_CITY_VISUALS__=true;
  const copy='Mieszkania, pokoje i życie studenckie';
  const fallback='data:image/svg+xml;charset=UTF-8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675"><defs><linearGradient id="g"><stop stop-color="#f7d85b"/><stop offset="1" stop-color="#e8b31d"/></linearGradient></defs><rect width="1200" height="675" fill="url(#g)"/><g fill="#fff" opacity=".9"><rect x="150" y="330" width="180" height="210"/><rect x="370" y="245" width="230" height="295"/><rect x="640" y="295" width="170" height="245"/><rect x="850" y="205" width="205" height="335"/></g></svg>');
  const st=document.createElement('style');
  st.id='casastudent-city-visuals-style';
  st.textContent='.city-grid{grid-template-columns:repeat(8,minmax(0,1fr))!important;gap:14px!important}.city-card.cs-city-visual-card{display:flex!important;flex-direction:column!important;min-height:205px!important;aspect-ratio:auto!important;border:1px solid rgba(20,31,45,.09)!important;border-radius:14px!important;overflow:hidden!important;background:#fff!important;background-image:none!important;box-shadow:0 6px 18px rgba(20,31,45,.08)!important;text-decoration:none!important}.city-card.cs-city-visual-card>img{display:block!important;width:100%!important;height:118px!important;min-height:118px!important;object-fit:cover!important;position:static!important;border-radius:0!important;flex:none!important;background:#f2cf54!important;opacity:1!important}.city-card.cs-city-visual-card:before{display:none!important}.cs-city-card-copy{display:flex;flex:1;flex-direction:column;padding:11px 12px 12px!important;background:#fff!important;color:#171717!important}.cs-city-card-copy strong{display:block!important;position:static!important;width:auto!important;height:auto!important;clip:auto!important;overflow:visible!important;white-space:normal!important;font-size:16px!important;line-height:1.15!important;margin:0 0 5px!important}.cs-city-card-copy span{font-size:11.5px!important;line-height:1.3!important;color:#62676d!important}.city-hero{position:relative!important;height:clamp(390px,42vw,520px)!important;min-height:390px!important;overflow:hidden!important;background:#c99a15!important;color:#fff!important}.city-hero-bg{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;background-position:center!important;background-size:cover!important;background-repeat:no-repeat!important}.city-hero:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(12,18,25,.18),rgba(12,18,25,.68));z-index:1;pointer-events:none}.city-hero>.container{position:relative!important;z-index:2!important;height:100%;display:flex;flex-direction:column;justify-content:flex-end;padding-top:44px!important;padding-bottom:44px!important}.city-hero h1,.city-hero h2,.city-hero p,.city-hero .kicker{color:#fff!important;text-shadow:0 2px 14px rgba(0,0,0,.28)}@media(max-width:1050px){.city-grid{grid-template-columns:repeat(4,minmax(0,1fr))!important}}@media(max-width:700px){.city-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:12px!important}.city-card.cs-city-visual-card>img{height:110px!important;min-height:110px!important}.city-card.cs-city-visual-card{min-height:190px!important}.city-hero{height:clamp(360px,82vw,440px)!important;min-height:360px!important}.city-hero-bg{opacity:1!important;background-position:center center!important}.city-hero-bg:before{display:none!important}.city-hero:after{background:linear-gradient(180deg,rgba(12,18,25,.06) 24%,rgba(12,18,25,.76) 100%)!important}.city-hero>.container{padding:28px 20px 30px!important}.city-hero h1{font-size:clamp(36px,11vw,46px)!important;line-height:1.02!important}.city-hero p{max-width:100%!important}}';
  document.head.appendChild(st);
  function bindFallback(img){if(!img||img.dataset.csFallbackBound)return;img.dataset.csFallbackBound='1';img.addEventListener('error',function(){if(img.dataset.csFallbackApplied)return;img.dataset.csFallbackApplied='1';img.src=fallback;img.removeAttribute('srcset');});}
  function enhance(card){
    if(!card||card.dataset.csVisualized)return;
    card.dataset.csVisualized='1';card.classList.add('cs-city-visual-card');
    const img=card.querySelector(':scope > img');if(img)bindFallback(img);
    const original=card.querySelector(':scope > strong');const name=original?original.textContent.trim():'City';
    if(!card.querySelector(':scope > .cs-city-card-copy')){
      const box=document.createElement('div');box.className='cs-city-card-copy';
      const title=document.createElement('strong');title.textContent=name;
      const text=document.createElement('span');text.textContent=copy;
      box.append(title,text);card.appendChild(box);
    }
    if(original)original.remove();
  }
  function run(){document.querySelectorAll('.city-card').forEach(enhance);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
