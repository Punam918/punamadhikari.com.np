(() => {
  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const themeToggle = document.querySelector('.theme-toggle');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const scrollUpButton = document.querySelector('.scroll-arrow-up');
  const scrollDownButton = document.querySelector('.scroll-arrow-down');
  const navLinks = [...document.querySelectorAll('.desktop-nav a, .mobile-menu a')];
  const revealItems = [...document.querySelectorAll('[data-reveal]')];
  const filterButtons = [...document.querySelectorAll('.filter-button')];
  const projectCards = [...document.querySelectorAll('.project-card')];
  const copyButton = document.querySelector('.copy-email');
  const toast = document.querySelector('.toast');
  const year = document.querySelector('#year');

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    if (themeToggle) {
      const nextTheme = theme === 'dark' ? 'light' : 'dark';
      themeToggle.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
    }
    try {
      localStorage.setItem('punam-theme', theme);
    } catch (_) {}
  };

  setTheme(root.dataset.theme === 'dark' ? 'dark' : 'light');

  themeToggle?.addEventListener('click', () => {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  const closeMenu = () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open menu');
    mobileMenu?.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };

  menuToggle?.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu?.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  });

  navLinks.forEach((link) => link.addEventListener('click', closeMenu));

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  const updateHeader = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const scrollByViewport = (direction) => {
    window.scrollBy({
      top: Math.round(window.innerHeight * 0.85) * direction,
      behavior: 'smooth',
    });
  };

  scrollUpButton?.addEventListener('click', () => scrollByViewport(-1));
  scrollDownButton?.addEventListener('click', () => scrollByViewport(1));

  const updateScrollArrows = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const viewport = window.innerHeight || document.documentElement.clientHeight || 0;
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight,
    );
    const atTop = scrollTop <= 6;
    const atBottom = scrollTop + viewport >= docHeight - 6;

    scrollUpButton?.classList.toggle('is-hidden', atTop);
    scrollDownButton?.classList.toggle('is-hidden', atBottom);
  };

  revealItems.forEach((item) => {
    const delay = Number(item.dataset.delay || 0);
    item.style.setProperty('--reveal-delay', `${delay}ms`);
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const sections = [...document.querySelectorAll('main section[id]')];
  if ('IntersectionObserver' in window && sections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      const currentId = visible.target.id;
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${currentId}`);
      });
    }, { threshold: [0.16, 0.35, 0.55], rootMargin: '-20% 0px -55% 0px' });

    sections.forEach((section) => sectionObserver.observe(section));
  }

  updateScrollArrows();
  window.addEventListener('scroll', updateScrollArrows, { passive: true });
  window.addEventListener('resize', updateScrollArrows);

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter || 'all';

      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });

      projectCards.forEach((card) => {
        const categories = (card.dataset.category || '').split(/\s+/);
        const show = filter === 'all' || categories.includes(filter);
        card.classList.toggle('is-hidden', !show);
      });
    });
  });

  let toastTimer;
  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2200);
  };

  copyButton?.addEventListener('click', async () => {
    const email = copyButton.dataset.email || '';
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
      showToast('Email copied');
    } catch (_) {
      const input = document.createElement('textarea');
      input.value = email;
      input.setAttribute('readonly', '');
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      const copied = document.execCommand('copy');
      input.remove();
      showToast(copied ? 'Email copied' : email);
    }
  });

  if (year) year.textContent = String(new Date().getFullYear());
})();
