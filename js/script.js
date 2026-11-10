(function(){
const WHATSAPP_NUMBER='37455977911';
const collectionData={
AREVA:{
heroImg:'https://cdn.shopify.com/s/files/1/0680/7909/1850/files/2026-10-2113.33.54.jpg?v=1792575373',
tag:'Collection I',
title:'AREVA',
subtitle:'by HUR ⛓🤍',
descArmenian:[],
descGold:'',
descEnglish:['A symbol of the sun, rooted in Armenian stone.','Reimagined in silver.','Ancient form. Modern silver. ♾️'],
pieces:['https://cdn.shopify.com/s/files/1/0680/7909/1850/files/2026-10-2113.34.17.jpg?v=1792575374','https://cdn.shopify.com/s/files/1/0680/7909/1850/files/2026-10-2113.34.30.jpg?v=1792575373','https://cdn.shopify.com/s/files/1/0680/7909/1850/files/2026-10-2113.34.38.jpg?v=1792575373','https://cdn.shopify.com/s/files/1/0680/7909/1850/files/2026-10-2113.34.47.jpg?v=1792575374','https://cdn.shopify.com/s/files/1/0680/7909/1850/files/2026-10-21_13.47.05.jpg?v=1792576050','https://cdn.shopify.com/s/files/1/0680/7909/1850/files/2026-10-21_13.49.51.jpg?v=1792576299']
},
RUNE:{
heroImg:'https://cdn.shopify.com/s/files/1/0680/7909/1850/files/2026-10-2113.54.54.jpg?v=1792576557',
tag:'Collection II',
title:'RUNE',
subtitle:'by HUR ⛓',
descArmenian:[],
descGold:'',
descEnglish:['RUNE is a study of contrasts — polished silver, raw texture and a sharp silhouette.','A reminder that strength doesn\'t always need to be loud.','Wear your mark.'],
pieces:['https://cdn.shopify.com/s/files/1/0680/7909/1850/files/2026-10-21_13.56.18.jpg?v=1792576618','https://cdn.shopify.com/s/files/1/0680/7909/1850/files/2026-10-21_13.56.01.jpg?v=1792576618','https://cdn.shopify.com/s/files/1/0680/7909/1850/files/2026-10-21_13.56.23.jpg?v=1792576618','https://cdn.shopify.com/s/files/1/0680/7909/1850/files/2026-10-21_13.56.11.jpg?v=1792576618']
},
HALO:{
heroImg:'https://cdn.shopify.com/s/files/1/0680/7909/1850/files/2026-10-2114.04.42.jpg?v=1792577243',
tag:'Collection III',
title:'HALO',
subtitle:'Collection 🤍⛓',
descArmenian:[],
descGold:'',
descEnglish:['HALO by HUR'],
pieces:['https://cdn.shopify.com/s/files/1/0680/7909/1850/files/2026-10-2114.04.46.jpg?v=1792577243','https://cdn.shopify.com/s/files/1/0680/7909/1850/files/2026-10-2114.04.55.jpg?v=1792577242','https://cdn.shopify.com/s/files/1/0680/7909/1850/files/2026-10-2114.05.06.jpg?v=1792577243','https://cdn.shopify.com/s/files/1/0680/7909/1850/files/2026-10-2114.05.15.jpg?v=1792577243']
},
GLOW:{
heroImg:'https://cdn.shopify.com/s/files/1/0680/7909/1850/files/2026-10-2114.10.00.jpg?v=1792577437',
tag:'Collection IV',
title:'GLOW Cuff',
subtitle:'by HUR 🧡️',
descArmenian:[],
descGold:'',
descEnglish:['Our first design featuring a stone.','A subtle glow meets dark, textured silver — creating a contrast of warmth and raw character.','A new expression of HUR. ⛓','HUR 🤍⛓️🔥'],
pieces:['https://cdn.shopify.com/s/files/1/0680/7909/1850/files/2026-10-2114.10.05.jpg?v=1792577437','https://cdn.shopify.com/s/files/1/0680/7909/1850/files/2026-10-2114.10.09.jpg?v=1792577437']
}
};
const popup=document.getElementById('entryPopup');
const closeBtn=document.getElementById('popupClose');
const skipBtn=document.getElementById('popupSkip');
const ctaBtn=document.getElementById('popupCta');
const video=document.getElementById('popupVideo');
const soundToggle=document.getElementById('soundToggle');
const soundIcon=document.getElementById('soundIcon');
const aboutUsLink=document.getElementById('aboutUsLink');
const footerAboutLink=document.getElementById('footerAboutLink');
const fallingBoxesContainer=document.getElementById('fallingBoxesContainer');
let autoCloseTimer=null;let boxesInterval=null;let popupAudioUnlocked=false;
function openPopup(){popup.classList.add('active');document.body.style.overflow='hidden';if(video){video.currentTime=0;if(popupAudioUnlocked){video.muted=false;updateSoundIcon(false)}else{video.muted=true;updateSoundIcon(true)}const p=video.play();if(p!==undefined)p.catch(function(){video.muted=true;updateSoundIcon(true);video.play().catch(function(){})})}if(soundToggle)soundToggle.style.display='flex';if(autoCloseTimer){clearTimeout(autoCloseTimer);autoCloseTimer=null}startFallingBoxes()}
function closePopup(){popup.classList.remove('active');document.body.style.overflow='';if(video)video.pause();if(autoCloseTimer){clearTimeout(autoCloseTimer);autoCloseTimer=null}stopFallingBoxes()}
function updateSoundIcon(isMuted){if(isMuted){soundIcon.innerHTML='<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>'}else{soundIcon.innerHTML='<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>'}}
function createFallingBox(){const box=document.createElement('div');box.className='falling-box';const startX=Math.random()*100;const duration=3+Math.random()*4;const delay=Math.random()*.5;const size=40+Math.random()*40;box.style.left=startX+'%';box.style.width=size+'px';box.style.height=(size*1.2)+'px';box.style.animationDuration=duration+'s';box.style.animationDelay=delay+'s';fallingBoxesContainer.appendChild(box);setTimeout(function(){if(box.parentNode)box.parentNode.removeChild(box)},(duration+delay)*1000+500)}
function startFallingBoxes(){for(let i=0;i<8;i++){setTimeout(createFallingBox,i*150)}boxesInterval=setInterval(createFallingBox,400)}
function stopFallingBoxes(){if(boxesInterval){clearInterval(boxesInterval);boxesInterval=null}while(fallingBoxesContainer.firstChild){fallingBoxesContainer.removeChild(fallingBoxesContainer.firstChild)}}
if(video){video.addEventListener('ended',function(){if(autoCloseTimer)clearTimeout(autoCloseTimer);autoCloseTimer=setTimeout(closePopup,2000)})}
if(soundToggle){soundToggle.addEventListener('click',function(){if(!video)return;video.muted=!video.muted;updateSoundIcon(video.muted);if(!video.muted)popupAudioUnlocked=true})}
closeBtn.addEventListener('click',function(e){e.preventDefault();closePopup()});
skipBtn.addEventListener('click',function(e){e.preventDefault();closePopup()});
ctaBtn.addEventListener('click',closePopup);
popup.addEventListener('click',function(e){if(e.target===popup)closePopup()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&popup.classList.contains('active'))closePopup()});
if(aboutUsLink)aboutUsLink.addEventListener('click',function(e){e.preventDefault();openPopup()});
if(footerAboutLink)footerAboutLink.addEventListener('click',function(e){e.preventDefault();openPopup()});
function unlockPopupAudio(){popupAudioUnlocked=true;if(popup.classList.contains('active')&&video&&video.muted){video.muted=false;updateSoundIcon(false)}document.removeEventListener('click',unlockPopupAudio);document.removeEventListener('touchstart',unlockPopupAudio);document.removeEventListener('keydown',unlockPopupAudio)}
document.addEventListener('click',unlockPopupAudio);
document.addEventListener('touchstart',unlockPopupAudio);
document.addEventListener('keydown',unlockPopupAudio);
let userInteracted=false;
function unlockAudio(){userInteracted=true;document.removeEventListener('click',unlockAudio);document.removeEventListener('touchstart',unlockAudio);document.removeEventListener('scroll',unlockAudio);document.removeEventListener('keydown',unlockAudio)}
document.addEventListener('click',unlockAudio);
document.addEventListener('touchstart',unlockAudio);
document.addEventListener('scroll',unlockAudio);
document.addEventListener('keydown',unlockAudio);
const heroVideo=document.getElementById('heroVideo');
const heroSoundToggle=document.getElementById('heroSoundToggle');
const heroSoundIcon=document.getElementById('heroSoundIcon');
let heroManuallyUnmuted=false;
function setHeroSoundIcon(isMuted){if(isMuted){heroSoundIcon.innerHTML='<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>';if(heroSoundToggle)heroSoundToggle.classList.add('muted')}else{heroSoundIcon.innerHTML='<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>';if(heroSoundToggle)heroSoundToggle.classList.remove('muted')}}
if(heroVideo){heroVideo.muted=true;heroVideo.loop=true;const p=heroVideo.play();if(p!==undefined)p.catch(function(){});const heroObserver=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){const p=heroVideo.play();if(p!==undefined){p.then(function(){if(userInteracted&&!heroManuallyUnmuted){heroVideo.muted=false;setHeroSoundIcon(false)}}).catch(function(){})}}else{heroVideo.muted=true;setHeroSoundIcon(true)}})}, {threshold:.4});heroObserver.observe(heroVideo.parentElement);if(heroSoundToggle){heroSoundToggle.addEventListener('click',function(){if(!heroVideo)return;heroVideo.muted=!heroVideo.muted;setHeroSoundIcon(heroVideo.muted);if(!heroVideo.muted){userInteracted=true;heroManuallyUnmuted=true}else{heroManuallyUnmuted=false}})}}
const cinematicVideo=document.getElementById('cinematicVideo');
const cinematicSoundToggle=document.getElementById('cinematicSoundToggle');
const cinematicSoundIcon=document.getElementById('cinematicSoundIcon');
let cinematicManuallyUnmuted=false;
function setCinematicSoundIcon(isMuted){if(isMuted){cinematicSoundIcon.innerHTML='<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>';if(cinematicSoundToggle)cinematicSoundToggle.classList.add('muted')}else{cinematicSoundIcon.innerHTML='<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>';if(cinematicSoundToggle)cinematicSoundToggle.classList.remove('muted')}}
if(cinematicVideo){cinematicVideo.muted=true;cinematicVideo.loop=true;const p=cinematicVideo.play();if(p!==undefined)p.catch(function(){});const observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){const p=cinematicVideo.play();if(p!==undefined){p.then(function(){if(userInteracted&&!cinematicManuallyUnmuted){cinematicVideo.muted=false;setCinematicSoundIcon(false)}}).catch(function(){})}}else{cinematicVideo.muted=true;setCinematicSoundIcon(true)}})}, {threshold:.4});observer.observe(cinematicVideo.parentElement);if(cinematicSoundToggle){cinematicSoundToggle.addEventListener('click',function(){if(!cinematicVideo)return;cinematicVideo.muted=!cinematicVideo.muted;setCinematicSoundIcon(cinematicVideo.muted);if(!cinematicVideo.muted){userInteracted=true;cinematicManuallyUnmuted=true}else{cinematicManuallyUnmuted=false}})}}
const revealElements=document.querySelectorAll('.reveal');
const revealObserver=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}})}, {threshold:.1,rootMargin:'0px 0px -50px 0px'});
revealElements.forEach(function(el){revealObserver.observe(el)});
const collectionModalOverlay=document.getElementById('collectionModalOverlay');
const collectionModal=document.getElementById('collectionModal');
const collectionModalClose=document.getElementById('collectionModalClose');
const cmHeroImg=document.getElementById('cmHeroImg');
const cmBody=document.getElementById('cmBody');
const mobileCards=document.querySelectorAll('.mobile-collection-card');
function openCollectionModal(collectionName){const data=collectionData[collectionName];if(!data)return;cmHeroImg.src=data.heroImg;cmHeroImg.alt=collectionName+' Collection';let html='';html+='<span class="collection-modal-tag">'+data.tag+'</span>';html+='<h2 class="collection-modal-title">'+data.title+'</h2>';html+='<p class="collection-modal-subtitle">'+data.subtitle+'</p>';if(data.descArmenian.length>0){data.descArmenian.forEach(function(line){html+='<p class="collection-modal-desc-armenian">'+line+'</p>'})}if(data.descGold){html+='<p class="collection-modal-desc" style="margin-top:1rem"><span class="gold-accent">'+data.descGold+'</span></p>'}if(data.descEnglish.length>0){html+='<div class="collection-modal-divider"></div>';data.descEnglish.forEach(function(line){html+='<p class="collection-modal-desc">'+line+'</p>'})}html+='<div class="collection-modal-divider"></div>';html+='<h3 class="collection-modal-pieces-title">The Pieces</h3>';html+='<div class="collection-modal-pieces-grid">';data.pieces.forEach(function(src){html+='<div class="collection-modal-piece"><img src="'+src+'" alt="'+collectionName+' piece"></div>'});html+='</div>';html+='<button class="collection-modal-order" data-collection="'+collectionName+'">';html+='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/><line x1="10" y1="11" x2="14" y2="11"/><line x1="12" y1="9" x2="12" y2="13"/></svg>';html+='Order this collection';html+='</button>';cmBody.innerHTML=html;const modalOrderBtn=cmBody.querySelector('.collection-modal-order');if(modalOrderBtn){modalOrderBtn.addEventListener('click',function(){openFaq(collectionName);closeCollectionModal()})}collectionModalOverlay.classList.add('active');document.body.style.overflow='hidden'}
function closeCollectionModal(){collectionModalOverlay.classList.remove('active');document.body.style.overflow=''}
mobileCards.forEach(function(card){card.addEventListener('click',function(){const collection=card.getAttribute('data-collection');openCollectionModal(collection)})});
if(collectionModalClose){collectionModalClose.addEventListener('click',function(e){e.preventDefault();closeCollectionModal()})}
collectionModalOverlay.addEventListener('click',function(e){if(e.target===collectionModalOverlay)closeCollectionModal()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&collectionModalOverlay.classList.contains('active')){closeCollectionModal()}});
const contactForm=document.getElementById('contactForm');
if(contactForm){contactForm.addEventListener('submit',function(e){e.preventDefault();const name=document.getElementById('contactName').value.trim();const email=document.getElementById('contactEmail').value.trim();const subject=document.getElementById('contactSubject').value.trim();const message=document.getElementById('contactMessage').value.trim();let text='Hello HUR!%0A';if(name)text+='Name: '+encodeURIComponent(name)+'%0A';if(email)text+='Email: '+encodeURIComponent(email)+'%0A';if(subject)text+='Subject: '+encodeURIComponent(subject)+'%0A';if(message)text+='Message: '+encodeURIComponent(message)+'%0A';window.open('https://wa.me/'+WHATSAPP_NUMBER+'?text='+text,'_blank');contactForm.reset()})}
const faqOverlay=document.getElementById('faqOverlay');
const faqClose=document.getElementById('faqClose');
const faqCollectionBadge=document.getElementById('faqCollectionBadge');
const faqFullSet=document.getElementById('faqFullSet');
const faqSeparate=document.getElementById('faqSeparate');
const orderButtons=document.querySelectorAll('.collection-order-trigger');
let currentCollection='';
function openFaq(collectionName){currentCollection=collectionName||'';if(collectionName){faqCollectionBadge.style.display='inline-block';faqCollectionBadge.textContent=collectionName+' Collection';document.getElementById('faqFullSetTitle').textContent='I want the full '+collectionName+' set';document.getElementById('faqSeparateTitle').textContent='I want to buy separately from '+collectionName+' pieces'}else{faqCollectionBadge.style.display='none';document.getElementById('faqFullSetTitle').textContent='I want the full set';document.getElementById('faqSeparateTitle').textContent='I want to buy separately'}faqOverlay.classList.add('active')}
function closeFaq(){faqOverlay.classList.remove('active')}
function sendWhatsApp(message){const text=encodeURIComponent(message);window.open('https://wa.me/'+WHATSAPP_NUMBER+'?text='+text,'_blank');closeFaq()}
orderButtons.forEach(function(btn){btn.addEventListener('click',function(e){e.preventDefault();const collection=btn.getAttribute('data-collection');openFaq(collection)})});
if(faqClose)faqClose.addEventListener('click',function(e){e.preventDefault();closeFaq()});
if(faqOverlay){faqOverlay.addEventListener('click',function(e){if(e.target===faqOverlay)closeFaq()})}
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&faqOverlay.classList.contains('active'))closeFaq()});
if(faqFullSet){faqFullSet.addEventListener('click',function(e){e.preventDefault();const collectionName=currentCollection||'HUR';const msg='Hello HUR! I would like to order the full '+collectionName+' collection 🤍';sendWhatsApp(msg)})}
if(faqSeparate){faqSeparate.addEventListener('click',function(e){e.preventDefault();const collectionName=currentCollection||'HUR';const msg='Hello HUR! I am interested in buying separately from the '+collectionName+' collection 🤍';sendWhatsApp(msg)})}
// ==========================================
// FORCE CLOSE MOBILE MENU ON LINK CLICK
// ==========================================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelectorAll('.nav-bar a');

if (menuToggle && navLinks.length > 0) {
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Immediately uncheck the box to close the menu
      menuToggle.checked = false;
      
      // Optional: If the link is an anchor (like #collections), 
      // we let it scroll, but the menu will be gone.
    });
  });
}
// ==========================================
// NEW UX IMPROVEMENT: Auto-close mobile menu 
// when a navigation link is clicked
// ==========================================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelectorAll('.nav-bar a');
if (menuToggle && navLinks.length > 0) {
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Uncheck the hidden checkbox to trigger the CSS :has() close animation
      menuToggle.checked = false;
    });
  });
}

})();

/* =====================================
   HUR VIDEO PLAYBACK OPTIMIZATION
===================================== */
(() => {
  const videos = [
    document.getElementById('heroVideo'),
    document.getElementById('popupVideo')
  ].filter(Boolean);

  videos.forEach((video) => {
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('preload', 'metadata');

    if (video.id === 'heroVideo') {
      video.muted = true;
      video.loop = true;
      video.autoplay = true;

      const startVideo = () => {
        if (document.visibilityState === 'visible') {
          video.play().catch(() => {});
        }
      };

      video.addEventListener('canplay', startVideo, {
        once: true
      });

      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          startVideo();
        } else {
          video.pause();
        }
      });
    }
  });
})();
