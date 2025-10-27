// Menu hambúrguer
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const closeBtn = document.getElementById('mobileClose');

hamburger?.addEventListener('click', () => mobileNav.classList.add('open'));
closeBtn?.addEventListener('click', () => mobileNav.classList.remove('open'));

// Toast
function showToast(msg) {
  const wrap = document.getElementById('toastWrap');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  wrap.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Modal
const modal = document.getElementById('modalBackdrop');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

openModal?.addEventListener('click', () => modal.style.display = 'flex');
closeModal?.addEventListener('click', () => modal.style.display = 'none');

// Formulário
const form = document.getElementById('cadastroForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('Cadastro enviado com sucesso! 🌿');
  form.reset();
});
