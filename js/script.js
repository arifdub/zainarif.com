// ===== Year in footer =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Theme toggle =====
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme) root.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ===== Mobile nav =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ===== Sticky nav shadow + scroll progress =====
const navWrap = document.getElementById('navWrap');
const progressBar = document.getElementById('progressBar');

function onScroll() {
  navWrap.classList.toggle('scrolled', window.scrollY > 10);
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = docHeight > 0 ? (scrollTop / docHeight) * 100 + '%' : '0%';
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===== Scroll-spy active nav link =====
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.nav-link');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

sections.forEach(sec => spyObserver.observe(sec));

// ===== Reveal on scroll =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== Animated stat counters =====
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }
    requestAnimationFrame(tick);
    statObserver.unobserve(el);
  });
}, { threshold: 0.6 });
document.querySelectorAll('.stat-num').forEach(el => statObserver.observe(el));

// ===== Skills data + render =====
const skills = [
  { icon: '🧩', label: 'Problem Solving' },
  { icon: '🤝', label: 'Teamwork & Collaboration' },
  { icon: '🎬', label: 'Video Editing & Digital Content' },
  { icon: '💬', label: 'Communication' },
  { icon: '🐍', label: 'Python & Basic Coding' },
  { icon: '🗂️', label: 'Organization & Time Management' },
  { icon: '📚', label: 'Willingness to Learn' },
  { icon: '🔬', label: 'Species Identification & Classification' },
  { icon: '🧘', label: 'Calm Under Pressure' },
  { icon: '🦺', label: 'Health & Safety Awareness' },
  { icon: '⏱️', label: 'Deadline Management' },
];
const skillsGrid = document.getElementById('skillsGrid');
skills.forEach((s, i) => {
  const div = document.createElement('div');
  div.className = 'skill-chip reveal';
  div.style.setProperty('--delay', `${i * 0.04}s`);
  div.innerHTML = `<span class="ico">${s.icon}</span><span class="label">${s.label}</span>`;
  skillsGrid.appendChild(div);
  revealObserver.observe(div);
});
