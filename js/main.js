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

  
  
  
  // ===== FORMULARIO DE CONTACTO -> WHATSAPP =====
  const contactForm = document.getElementById('contact-form');
  console.log('[XpertPlagas] contact-form encontrado:', !!contactForm);

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('[XpertPlagas] Submit capturado, abriendo WhatsApp...');

      const name = (contactForm.querySelector('#name')?.value || '').trim();
      const phone = (contactForm.querySelector('#phone')?.value || '').trim();
      const service = (contactForm.querySelector('#service')?.value || '').trim();
      const message = (contactForm.querySelector('#message')?.value || '').trim();
      const email = (contactForm.querySelector('#email')?.value || '').trim();
      const space = (contactForm.querySelector('#space')?.value || '').trim();

      const formStatus = document.getElementById('form-status');

      if (!name || !phone || !service || !message) {
        if (formStatus) {
          formStatus.textContent = '✗ Por favor completa todos los campos obligatorios (*).';
          formStatus.className = 'form-status form-status--error';
        }
        return;
      }

      const WHATSAPP_NUMBER = '593984024198'; // produccion

      let waMessage = '*Nuevo contacto desde xpertplagas.com*\n\n';
      waMessage += '*Nombre:* ' + name + '\n';
      waMessage += '*Teléfono:* ' + phone + '\n';
      if (email) waMessage += '*Correo:* ' + email + '\n';
      waMessage += '*Servicio:* ' + service + '\n';
      if (space) waMessage += '*Espacio:* ' + space + '\n';
      waMessage += '\n*Mensaje:*\n' + message;

      const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(waMessage);
      console.log('[XpertPlagas] Abriendo URL:', url);

      window.open(url, '_blank', 'noopener,noreferrer');

      if (formStatus) {
        formStatus.textContent = '✓ Se abrió WhatsApp con tu mensaje. Si no se abrió, revisa que tu navegador no esté bloqueando pop-ups.';
        formStatus.className = 'form-status form-status--success';
      }

      setTimeout(() => {
        contactForm.reset();
        if (formStatus) formStatus.textContent = '';
      }, 8000);
    });
  } else {
    console.warn('[XpertPlagas] ⚠️ No se encontró el formulario con id="contact-form"');
  }

  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('is-visible', window.scrollY > 500);
    }, { passive: true });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
