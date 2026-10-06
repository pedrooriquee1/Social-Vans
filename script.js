// ===== Configuração =====
// Número do WhatsApp com DDI + DDD, só dígitos. Ex.: 5511999999999
const WHATSAPP = '5500000000000';

// Links de WhatsApp: todo elemento com data-wa vira link com a mensagem pronta
document.querySelectorAll('[data-wa]').forEach((el) => {
  const msg = encodeURIComponent(el.dataset.wa);
  el.href = `https://wa.me/${WHATSAPP}?text=${msg}`;
  el.target = '_blank';
  el.rel = 'noopener';
});

// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', open);
});

nav.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', false);
  })
);

// FAQ: mantém só uma pergunta aberta por vez
const faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach((item) =>
  item.addEventListener('toggle', () => {
    if (item.open) faqItems.forEach((other) => other !== item && (other.open = false));
  })
);

document.getElementById('ano').textContent = new Date().getFullYear();
