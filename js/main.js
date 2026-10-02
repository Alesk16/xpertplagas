// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  // FAQ toggles
  const faqBtns = document.querySelectorAll('.faq-btn');
  faqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.parentElement.querySelector('.faq-panel');
      const icon = btn.querySelector('.faq-icon');
      if(!panel || !icon) return;
      const isOpen = panel.style.gridTemplateRows === '1fr';
      panel.style.gridTemplateRows = isOpen ? '0fr' : '1fr';
      icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  });

  // Clients toggle
  const clientsTopBtn = document.querySelector('.clients-toggle-btn');
  const clientsBottomBtn = document.querySelector('.clients-toggle-btn-bottom');
  const clientsWrap = document.querySelector('.clients-extra-wrapper');

  function toggleClients() {
    if(!clientsWrap || !clientsTopBtn) return;
    const isOpen = clientsWrap.style.gridTemplateRows === '1fr';
    if(!isOpen){
      clientsWrap.style.gridTemplateRows = '1fr';
      clientsTopBtn.style.opacity = '0';
      clientsTopBtn.style.pointerEvents = 'none';
    } else {
      clientsWrap.style.gridTemplateRows = '0fr';
      clientsTopBtn.style.opacity = '1';
      clientsTopBtn.style.pointerEvents = 'auto';
    }
  }

  if(clientsTopBtn) clientsTopBtn.addEventListener('click', toggleClients);
  if(clientsBottomBtn) clientsBottomBtn.addEventListener('click', toggleClients);

  const hamburger = document.querySelector('.header__hamburger');
  const nav = document.querySelector('.header__nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      hamburger.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
      nav.classList.toggle('is-open', !isOpen);
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      });
    });
  }
});