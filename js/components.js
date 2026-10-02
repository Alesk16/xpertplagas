// js/components.js
const headerHTML = \
 <div class="container header-container">
 <a href="../index.html" class="logo">
 <img src="../assets/img/logos/logo-xpert.png" alt="XpertPlagas Logo">
 </a>
 <nav class="nav">
 <a href="../index.html">Inicio</a>
 <a href="../pages/servicios.html">Servicios</a>
 <a href="../pages/productos.html">Productos</a>
 <a href="../pages/nosotros.html">Nosotros</a>
 <a href="../pages/contacto.html">Contacto</a>
 </nav>
 </div>
\;

const footerHTML = \
 <div class="container">
 <div class="footer-grid">
 <div class="footer-col">
 <img src="../assets/img/ui/sello-garantia-total-footer.png" alt="Sello Garantía Total" class="footer-seal-img">
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
 </div>
\;

document.addEventListener("DOMContentLoaded", () => {
    const headerEl = document.getElementById("main-header");
    if (headerEl) {
        headerEl.innerHTML = headerHTML;
        // Fix paths if on root index.html
        if(window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
            headerEl.innerHTML = headerEl.innerHTML.replace(/\.\.\//g, '');
            // Update links to pages if needed to prepend pages/ if in root
            headerEl.innerHTML = headerEl.innerHTML.replace(/href="pages\//g, 'href="pages/');
        }
    }

    const footerEl = document.getElementById("main-footer");
    if (footerEl) {
        footerEl.innerHTML = footerHTML;
        if(window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
            footerEl.innerHTML = footerEl.innerHTML.replace(/\.\.\//g, '');
        }
    }
});
