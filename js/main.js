// js/main.js
function toggleClientsExtra(){
  var wrap=document.getElementById('clients-extra-wrapper');
  var topBtn=document.getElementById('clients-toggle-btn');
  if(!wrap || !topBtn) return;
  var isOpen=wrap.style.gridTemplateRows==='1fr';
  if(!isOpen){
    wrap.style.gridTemplateRows='1fr';
    topBtn.style.opacity='0';
    topBtn.style.pointerEvents='none';
  }else{
    wrap.style.gridTemplateRows='0fr';
    topBtn.style.opacity='1';
    topBtn.style.pointerEvents='auto';
  }
}

// Ensure toggle functions from FAQs work
function toggleFaq(btn) {
  var panel = btn.parentElement.querySelector('.faq-panel');
  var icon = btn.querySelector('.faq-icon');
  if(!panel || !icon) return;
  var isOpen = panel.style.gridTemplateRows === '1fr';
  panel.style.gridTemplateRows = isOpen ? '0fr' : '1fr';
  icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
}
