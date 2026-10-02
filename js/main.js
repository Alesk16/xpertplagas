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

  
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
      formStatus.className = 'form-status';

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        const result = await response.json();
        if (response.ok && result.success) {
          formStatus.textContent = "\u2713 \u00A1Gracias! Tu mensaje fue enviado. Te contactaremos en menos de 24 horas h\u00E1biles.";
          formStatus.classList.add('form-status--success');
          contactForm.reset();
        } else {
          throw new Error(result.message || 'Error al enviar');
        }
      } catch (err) {
        formStatus.textContent = "\u2717 Hubo un problema al enviar. Por favor escr\u00EDbenos directo por WhatsApp al 098 402 4198.";
        formStatus.classList.add('form-status--error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
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
