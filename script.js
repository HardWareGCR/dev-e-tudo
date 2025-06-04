const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function updateThemeIcon() {
  if (document.body.classList.contains('light')) {
    themeIcon.textContent = '☀️';
  } else {
    themeIcon.textContent = '🌙'; 
  }
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  updateThemeIcon();
});

updateThemeIcon(); 

const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;

    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    cards.forEach(card => {
      if (category === 'all' || card.classList.contains(category)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

document.querySelectorAll('.card').forEach(card => {
  const url = card.getAttribute('data-url');
  if (url) {
    card.addEventListener('click', () => {
      window.open(url, '_blank');
    });
  }
});