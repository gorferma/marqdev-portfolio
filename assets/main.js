// MarqDev portfolio interactions
// - Mobile nav toggle
// - Contact form mailto handling

(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when clicking a link (mobile UX)
    navMenu.addEventListener('click', (e) => {
      if (e.target.matches('a')) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scroll for in-page links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', id);
    }
  });

  // Mailto: prefill subject & body from form (only when using mailto action)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const action = (form.getAttribute('action') || '').trim();
      if (!action.toLowerCase().startsWith('mailto:')) {
        // Using a real endpoint (e.g., FormSubmit). Allow normal submit.
        return;
      }
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      const to = action.replace('mailto:', '') || 'your.email@example.com';
      const subject = encodeURIComponent(`New inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }

  // Reveal on scroll using IntersectionObserver
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    // Fallback: make everything visible
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  // Subtle parallax for hero background wave
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const y = Math.min(60, window.scrollY * 0.08);
      heroBg.style.transform = `translateY(${y}px)`;
    }, { passive: true });
  }

  // Header shadow on scroll for professional polish
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      const scrolled = window.scrollY > 6;
      header.style.boxShadow = scrolled ? '0 2px 12px rgba(15,23,42,0.08)' : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Subtle pointer tilt on project cards (non-placeholder)
  (function addCardTilt() {
    const cards = Array.from(document.querySelectorAll('.card.project:not(.placeholder)'));
    const MAX = 6; // degrees
    cards.forEach((el) => {
      el.classList.add('tilt');
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const rx = ((x / r.width) - 0.5) * (MAX * 2); // rotateY
        const ry = -((y / r.height) - 0.5) * (MAX * 2); // rotateX
        el.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
        el.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
        el.style.setProperty('--px', `${x}px`);
        el.style.setProperty('--py', `${y}px`);
      });
      el.addEventListener('pointerleave', () => {
        el.style.removeProperty('--rx');
        el.style.removeProperty('--ry');
        el.style.removeProperty('--px');
        el.style.removeProperty('--py');
      });
    });
  })();
})();
