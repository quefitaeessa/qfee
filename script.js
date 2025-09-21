// Carrossel lateral
function rolar(botao, direcao) {
  const container = botao.parentElement.querySelector('.carrossel');
  const largura = container.querySelector('.card').offsetWidth + 20; // card + gap
  container.scrollBy({ left: direcao * largura, behavior: 'smooth' });
}

// Banner automático
let slideIndex = 0;
function mostrarSlide() {
  const slides = document.querySelectorAll('.banner .slide');
  slides.forEach(s => s.style.display = 'none');
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex-1].style.display = 'block';
