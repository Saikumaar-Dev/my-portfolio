/* ═══════════════════════════════════════════
   PORTFOLIO — script.js
   Saikumar Jatavath | Frontend Developer
═══════════════════════════════════════════ */

'use strict';

/* ── DATA ────────────────────────────────── */

const SKILLS_DATA = [{
        name: 'HTML5 / CSS3',
        icon: '⚡',
        pct: 92,
        tags: ['Semantic HTML', 'Flexbox', 'Grid', 'Animations']
    },
    {
        name: 'JavaScript',
        icon: '🟨',
        pct: 85,
        tags: ['ES6+', 'DOM APIs', 'Async/Await', 'Fetch']
    },
    {
        name: 'React.js',
        icon: '⚛',
        pct: 82,
        tags: ['Hooks', 'Context', 'Redux', 'React Router']
    },
    {
        name: 'Bootstrap',
        icon: '🅱',
        pct: 80,
        tags: ['Responsive', 'Components', 'Utilities']
    },
    {
        name: 'SQL / Databases',
        icon: '🗄',
        pct: 72,
        tags: ['MySQL', 'Queries', 'Joins', 'Aggregations']
    },
    {
        name: 'Git & GitHub',
        icon: '🌿',
        pct: 78,
        tags: ['Version Control', 'Branching', 'Pull Requests']
    },
    {
        name: 'Python',
        icon: '🐍',
        pct: 68,
        tags: ['Scripting', 'Problem Solving', 'Automation']
    },
    {
        name: 'UI/UX Design',
        icon: '🎨',
        pct: 74,
        tags: ['Figma', 'Wireframing', 'Prototyping']
    }
];

const PROJECTS_DATA = [{
        title: 'Food Munch',
        emoji: '🍔',
        bg: 'linear-gradient(135deg, #1a0a00 0%, #3d1a00 100%)',
        desc: 'A fully responsive food ordering website with smooth animations, cart functionality, and an appealing UI for restaurant listings.',
        tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
        live: 'https://saikumarjat.ccbp.tech/',
        github: 'https://github.com/jatavath-saikumar'
    },
    {
        title: 'Todos Application',
        emoji: '✅',
        bg: 'linear-gradient(135deg, #001a10 0%, #003d23 100%)',
        desc: 'A feature-rich Todo app with CRUD operations, local storage persistence, filtering by status, and smooth transitions.',
        tech: ['React.js', 'JavaScript', 'CSS3', 'LocalStorage'],
        live: 'https://saikumarjat.ccbp.tech/',
        github: 'https://github.com/jatavath-saikumar'
    },
    {
        title: 'IPL Dashboard',
        emoji: '🏏',
        bg: 'linear-gradient(135deg, #0a001a 0%, #1a003d 100%)',
        desc: 'A React-based IPL statistics dashboard featuring team records, win/loss data visualizations, and match details fetched via API.',
        tech: ['React.js', 'REST API', 'CSS3', 'Recharts'],
        live: 'https://saikumarjat.ccbp.tech/',
        github: 'https://github.com/jatavath-saikumar'
    },
    {
        title: 'E-Commerce App',
        emoji: '🛒',
        bg: 'linear-gradient(135deg, #001a1a 0%, #003d3d 100%)',
        desc: 'A full-featured e-commerce frontend with product listings, filtering, cart management, and simulated checkout with React state.',
        tech: ['React.js', 'Context API', 'CSS3', 'REST API'],
        live: 'https://saikumarjat.ccbp.tech/',
        github: 'https://github.com/jatavath-saikumar'
    },
    {
        title: 'Wikipedia Search',
        emoji: '📖',
        bg: 'linear-gradient(135deg, #1a1500 0%, #3d3200 100%)',
        desc: 'An interactive Wikipedia search app that fetches and displays real-time results from the Wikipedia API with a clean reading layout.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Wikipedia API'],
        live: 'https://saikumarjat.ccbp.tech/',
        github: 'https://github.com/jatavath-saikumar'
    },
    {
        title: 'Password Manager',
        emoji: '🔐',
        bg: 'linear-gradient(135deg, #1a000d 0%, #3d0020 100%)',
        desc: 'A secure browser-based password manager with AES-style encrypted local storage, password strength checker, and a copy-to-clipboard feature.',
        tech: ['React.js', 'JavaScript', 'LocalStorage', 'CSS3'],
        live: 'https://saikumarjat.ccbp.tech/',
        github: 'https://github.com/jatavath-saikumar'
    }
];

const TIMELINE_DATA = [{
        type: 'edu',
        date: '2020 – 2024',
        title: 'B.Com — Computer Applications',
        org: 'Osmania University, Hyderabad',
        desc: 'Graduated with a foundation in data structures, algorithms, software engineering, databases, and computer networks. Actively participated in coding contests and web development clubs.',
        skills: ['HTML', 'DBMS', 'OS', 'Networking', 'OOP']
    },
    {
        type: 'cert',
        date: '2026',
        title: 'Full Stack Development Certification',
        org: 'NxtWave — CCBP 4.0 Intensive Program',
        desc: 'Completed an intensive 6-month full-stack curriculum covering HTML, CSS, JavaScript, React.js, Node.js, Express, and SQL. Built 10+ real-world projects.',
        skills: ['React', 'Node.js', 'SQL', 'REST APIs', 'Git']
    },
    {
        type: 'exp',
        date: '2025 – Present',
        title: 'Frontend Developer',
        org: 'Freelance / Self-Employed',
        desc: 'Designing and developing responsive web applications for clients. Specializing in React.js, modern CSS, and performance optimization. Delivering pixel-perfect UIs with seamless UX.',
        skills: ['React.js', 'JavaScript', 'CSS3', 'Figma', 'Git']
    },
    {
        type: 'cert',
        date: '2025',
        title: 'SQL & Database Design',
        org: 'NxtWave — Advanced Module',
        desc: 'Mastered advanced SQL queries, database normalization, joins, aggregations, and schema design for real-world applications.',
        skills: ['MySQL', 'Normalization', 'Complex Queries']
    }
];

/* ── LOADER ───────────────────────────────── */

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
        initReveal();
        initCounters();
    }, 1600);
    document.body.style.overflow = 'hidden';
});

/* ── CUSTOM CURSOR ───────────────────────── */

const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

let mouseX = 0,
    mouseY = 0;
let curX = 0,
    curY = 0;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
});

function animateCursor() {
    curX += (mouseX - curX) * 0.15;
    curY += (mouseY - curY) * 0.15;
    cursor.style.left = curX + 'px';
    cursor.style.top = curY + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button, .project-card, .skill-item').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('expanded'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('expanded'));
});

/* ── NAVBAR ──────────────────────────────── */

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('open');
});

// Close mobile nav on link click
mobileNav.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
    });
});

/* ── THEME TOGGLE ────────────────────────── */

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

/* ── TYPEWRITER ──────────────────────────── */

const roles = [
    'Frontend Developer',
    'React.js Specialist',
    'UI/UX Enthusiast',
    'Web Experience Builder'
];

let roleIdx = 0,
    charIdx = 0,
    isDeleting = false;
const typeEl = document.getElementById('typewriter');

function typeWriter() {
    const currentRole = roles[roleIdx];
    if (!isDeleting) {
        typeEl.textContent = currentRole.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === currentRole.length) {
            isDeleting = true;
            setTimeout(typeWriter, 2200);
            return;
        }
    } else {
        typeEl.textContent = currentRole.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
        }
    }
    setTimeout(typeWriter, isDeleting ? 55 : 90);
}
setTimeout(typeWriter, 2000);

/* ── SCROLL REVEAL ───────────────────────── */

function initReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${(i % 4) * 0.1}s`;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(el => observer.observe(el));
}

/* ── COUNTERS ────────────────────────────── */

function initCounters() {
    const counters = document.querySelectorAll('.stat-num');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                let current = 0;
                const step = target / 40;
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = Math.floor(current);
                }, 40);
                observer.unobserve(el);
            }
        });
    }, {
        threshold: 0.5
    });
    counters.forEach(el => observer.observe(el));
}

/* ── RENDER SKILLS ───────────────────────── */

function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;

    grid.innerHTML = SKILLS_DATA.map(skill => `
    <div class="skill-item reveal">
      <div class="skill-header">
        <span class="skill-name">${skill.icon} ${skill.name}</span>
        <span class="skill-pct">${skill.pct}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-fill" data-pct="${skill.pct}"></div>
      </div>
      <div class="skill-tags">
        ${skill.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');

    // Animate bars on intersection
    const bars = grid.querySelectorAll('.skill-fill');
    const barObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                setTimeout(() => {
                    bar.style.width = bar.dataset.pct + '%';
                }, 200);
                barObserver.unobserve(bar);
            }
        });
    }, {
        threshold: 0.3
    });

    bars.forEach(bar => barObserver.observe(bar));
}

/* ── RENDER PROJECTS ─────────────────────── */

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = PROJECTS_DATA.map((proj, i) => `
    <div class="project-card reveal">
      <div class="project-img">
        <div class="project-img-inner" style="background: ${proj.bg}">
          ${proj.emoji}
        </div>
      </div>
      <div class="project-body">
        <div class="project-num">Project ${String(i+1).padStart(2,'0')}</div>
        <div class="project-title">${proj.title}</div>
        <div class="project-desc">${proj.desc}</div>
        <div class="project-tech">
          ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${proj.live}" target="_blank" class="project-link primary-link">Live ↗</a>
          <a href="${proj.github}" target="_blank" class="project-link">GitHub ↗</a>
        </div>
      </div>
    </div>
  `).join('');
}

/* ── RENDER TIMELINE ─────────────────────── */

function renderTimeline() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;

    const badgeClass = {
        edu: 'badge-edu',
        exp: 'badge-exp',
        cert: 'badge-cert'
    };
    const badgeLabel = {
        edu: 'Education',
        exp: 'Experience',
        cert: 'Certification'
    };

    timeline.innerHTML = TIMELINE_DATA.map(item => `
    <div class="timeline-item reveal">
      <div class="timeline-left">
        <div class="timeline-dot"></div>
        <div class="timeline-date">${item.date}</div>
      </div>
      <div class="timeline-content">
        <span class="timeline-badge ${badgeClass[item.type]}">${badgeLabel[item.type]}</span>
        <div class="timeline-title">${item.title}</div>
        <div class="timeline-org">${item.org}</div>
        <div class="timeline-desc">${item.desc}</div>
        <div class="timeline-skills">
          ${item.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ── CONTACT FORM ────────────────────────── */

const contactForm = document.getElementById('contactForm');

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setError(inputId, errorId, msg) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (msg) {
        input.classList.add('error');
        error.textContent = msg;
    } else {
        input.classList.remove('error');
        if (error) error.textContent = '';
    }
}

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const message = document.getElementById('messageInput').value.trim();

    if (!name) {
        setError('nameInput', 'nameError', 'Please enter your name.');
        valid = false;
    } else {
        setError('nameInput', 'nameError', '');
    }

    if (!email) {
        setError('emailInput', 'emailError', 'Please enter your email.');
        valid = false;
    } else if (!validateEmail(email)) {
        setError('emailInput', 'emailError', 'Please enter a valid email address.');
        valid = false;
    } else {
        setError('emailInput', 'emailError', '');
    }

    if (!message) {
        setError('messageInput', 'messageError', 'Please enter a message.');
        valid = false;
    } else {
        setError('messageInput', 'messageError', '');
    }

    if (valid) {
        const btn = document.getElementById('submitBtn');
        btn.disabled = true;
        btn.querySelector('.btn-text').textContent = 'Sending…';

        setTimeout(() => {
            document.getElementById('formSuccess').classList.add('show');
            contactForm.reset();
            btn.disabled = false;
            btn.querySelector('.btn-text').textContent = 'Send Message';
            setTimeout(() => document.getElementById('formSuccess').classList.remove('show'), 3000);
        }, 1200);
    }
});

/* ── RESUME DOWNLOAD ─────────────────────── */

document.getElementById('resumeBtn').addEventListener('click', (e) => {
    e.preventDefault();
    // Replace with actual resume PDF path
    alert('Resume download — please add your resume PDF as "resume.pdf" to the project folder and update this link!');
});

/* ── SMOOTH SCROLL ───────────────────────── */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
                top,
                behavior: 'smooth'
            });
        }
    });
});

/* ── ACTIVE NAV HIGHLIGHT ────────────────── */

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle(
                    'active',
                    link.getAttribute('href') === '#' + entry.target.id
                );
            });
        }
    });
}, {
    rootMargin: '-50% 0px -50% 0px'
});

sections.forEach(s => sectionObserver.observe(s));

/* ── INIT ────────────────────────────────── */

renderSkills();
renderProjects();
renderTimeline();