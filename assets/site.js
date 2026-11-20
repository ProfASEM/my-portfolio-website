'use strict';

// ---------------------------------------------------------------------------
// Mobile navigation
// ---------------------------------------------------------------------------
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#navigation');

function closeMenu() {
  if (!menu || !menuButton) return;

  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
      menuButton.focus();
    }
  });
}

// ---------------------------------------------------------------------------
// Theme toggle
// ---------------------------------------------------------------------------
const themeButton = document.querySelector('.theme-toggle');
const isArabic = document.documentElement.lang === 'ar';
const themeLabels = isArabic
  ? {
      dark: ['الوضع الداكن', 'التبديل إلى الوضع الداكن'],
      light: ['الوضع الفاتح', 'التبديل إلى الوضع الفاتح'],
    }
  : {
      dark: ['Dark mode', 'Switch to dark mode'],
      light: ['Light mode', 'Switch to light mode'],
    };

function applyTheme(isLightTheme) {
  if (!document.body) return;

  document.body.classList.toggle('light', isLightTheme);

  if (themeButton) {
    const [label, accessibleLabel] = isLightTheme ? themeLabels.dark : themeLabels.light;
    themeButton.textContent = label;
    themeButton.setAttribute('aria-label', accessibleLabel);
  }
}

try {
  applyTheme(localStorage.getItem('theme') === 'light');
} catch {
  applyTheme(false);
}

if (themeButton) {
  themeButton.addEventListener('click', () => {
    const isLightTheme = !document.body.classList.contains('light');
    applyTheme(isLightTheme);

    try {
      localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
    } catch {
      // Ignore storage errors in restricted or private browser environments.
    }
  });
}

// ---------------------------------------------------------------------------
// Footer year
// ---------------------------------------------------------------------------
document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

// ---------------------------------------------------------------------------
// Project filtering
// ---------------------------------------------------------------------------
const filters = document.querySelectorAll('[data-filter]');

function filterProjects(category) {
  const projectCards = document.querySelectorAll('[data-category]');
  const projectCount = document.querySelector('#project-count');

  let count = 0;

  projectCards.forEach((card) => {
    const matchesCategory = category === 'all' || card.dataset.category === category;
    card.hidden = !matchesCategory;

    if (!card.hidden) {
      count += 1;
    }
  });

  filters.forEach((button) => {
    const isActive = button.dataset.filter === category;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  if (projectCount) {
    projectCount.textContent = isArabic ? `المشاريع المعروضة (${count})` : `${count} projects`;
  }
}

if (filters.length) {
  filters.forEach((button) => {
    button.addEventListener('click', () => filterProjects(button.dataset.filter));
  });

  filterProjects('Data Analysis');
}

