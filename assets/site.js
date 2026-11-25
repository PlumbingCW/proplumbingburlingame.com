(function(){
  var de=document.documentElement;
  de.classList.remove('no-js');
  var toggle=document.querySelector('.nav-toggle');
  var drawer=document.querySelector('.mob-drawer');
  var overlay=document.querySelector('.mob-overlay');
  function setOpen(open){
    document.body.classList.toggle('mob-open',open);
    if(toggle){toggle.setAttribute('aria-expanded',open?'true':'false');}
    if(drawer){drawer.setAttribute('aria-hidden',open?'false':'true');}
    de.style.overflow=open?'hidden':'';
  }
  if(toggle){toggle.addEventListener('click',function(){setOpen(!document.body.classList.contains('mob-open'));});}
  if(overlay){overlay.addEventListener('click',function(){setOpen(false);});}
  var closeBtn=document.querySelector('.mob-close');
  if(closeBtn){closeBtn.addEventListener('click',function(){setOpen(false);});}
  if(drawer){drawer.addEventListener('click',function(e){if(e.target.closest('a')){setOpen(false);}});}
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){setOpen(false);}});
  window.addEventListener('resize',function(){if(window.innerWidth>768){setOpen(false);}});
  document.querySelectorAll('.has-drop > button').forEach(function(btn){
    btn.addEventListener('click',function(){
      var li=btn.parentElement;var open=li.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
    });
  });
  document.addEventListener('click',function(e){
    document.querySelectorAll('.has-drop.open').forEach(function(li){if(!li.contains(e.target)){li.classList.remove('open');}});
  });
  document.querySelectorAll('.faq-item').forEach(function(item){
    var q=item.querySelector('.faq-q');var a=item.querySelector('.faq-a');
    if(!q||!a){return;}
    q.addEventListener('click',function(){
      var open=item.classList.toggle('open');
      q.setAttribute('aria-expanded',open?'true':'false');
      a.style.maxHeight=open?a.scrollHeight+'px':'0px';
    });
  });
  window.addEventListener('resize',function(){
    document.querySelectorAll('.faq-item.open .faq-a').forEach(function(a){a.style.maxHeight=a.scrollHeight+'px';});
  });
})();
