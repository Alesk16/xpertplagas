// js/components.js
document.addEventListener("DOMContentLoaded", () => {
    // Detect if we are in /pages/ or in root
    const isRoot = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || !window.location.pathname.includes('/pages/');
    const ROOT = isRoot ? '' : '../';

    const HEADER = \
  <header class="header">
    <a href="\\index.html" class="header__logo">
      <img src="\\assets/img/logos/logo-xpert.png" alt="XPERT PLAGAS">
    </a>
    <nav class="header__nav">
      <a href="\\index.html">Inicio</a>
      <a href="\\pages/servicios.html">Servicios</a>
      <a href="\\pages/productos.html">Productos</a>
      <a href="\\pages/nosotros.html">Nosotros</a>
      <a href="\\pages/contacto.html">Contacto</a>
    </nav>
    <a href="https://wa.me/593984024198" target="_blank" class="header__cta btn-primary">WhatsApp</a>
  </header>\;

    const FOOTER = \
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <img src="\\assets/img/ui/sello-garantia-total-footer.png" alt="Sello Garantía Total" class="footer-seal-img">
        <p>Su aliado en la prevención, control y eliminación de plagas.</p>
      </div>
      <div class="footer-col contact-col">
        <h4>Contacto</h4>
        <p><i class="fa-solid fa-phone"></i> <strong>+593 98 402 4198</strong></p>
        <p><i class="fa-solid fa-envelope"></i> <a href="mailto:gerencia@xpertplagas.com" target="_blank">gerencia@xpertplagas.com</a></p>
        <p><i class="fa-solid fa-globe"></i> <a href="https://xpertplagas.com/" target="_blank">xpertplagas.com</a></p>
      </div>
      <div class="footer-col">
        <h4>Redes Sociales</h4>
        <div class="social-links">
          <a href="https://www.facebook.com/people/Xpert-Plagas/61591489952519" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/xpertplagas" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.tiktok.com/@xpertplagas" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© XpertPlagas. Todos los derechos reservados.</p>
    </div>
  </div>\;

    const headerMount = document.getElementById('header-mount') || document.getElementById('main-header') || document.querySelector('header');
    if (headerMount) {
        if (headerMount.tagName === 'HEADER') {
            headerMount.outerHTML = HEADER;
        } else {
            headerMount.innerHTML = HEADER;
        }
    }

    const footerMount = document.getElementById('footer-mount') || document.getElementById('main-footer') || document.querySelector('footer');
    if (footerMount) {
        if (footerMount.tagName === 'FOOTER') {
            footerMount.outerHTML = '<footer class="footer">' + FOOTER + '</footer>';
        } else {
            footerMount.innerHTML = FOOTER;
        }
    }
});