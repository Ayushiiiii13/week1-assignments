// ==========================================================================
// AYUSHI RATHI® — PORTFOLIO JAVASCRIPT (MONTGOMERY EDITION)
// Theme handling, interactive terminal, copy email toast, ambient glow,
// category filtering, and accessible contact form validation.
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initAmbientGlow();
  initMobileNav();
  initCopyEmail();
  initTerminal();
  initProjectFiltering();
  initContactForm();
});

/* --------------------------------------------------------------------------
   Theme Switcher (Default: Montgomery Obsidian Dark)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('ayushi-portfolio-theme') || 'dark';

  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon(false);
  } else {
    document.documentElement.removeAttribute('data-theme');
    updateThemeIcon(true);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isCurrentDark = document.documentElement.getAttribute('data-theme') !== 'light';
      if (isCurrentDark) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('ayushi-portfolio-theme', 'light');
        updateThemeIcon(false);
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('ayushi-portfolio-theme', 'dark');
        updateThemeIcon(true);
      }
    });
  }
}

function updateThemeIcon(isDark) {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;
  
  if (isDark) {
    toggleBtn.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
      </svg>`;
    toggleBtn.setAttribute('aria-label', 'Switch to light editorial theme');
  } else {
    toggleBtn.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.3 2a10 10 0 0 0-.19 20 10.04 10.04 0 0 0 9.9-8.12 1 1 0 0 0-1.19-1.18 8 8 0 1 1-8.52-10.7 1 1 0 0 0 0-1.19A1.02 1.02 0 0 0 12.3 2z"/>
      </svg>`;
    toggleBtn.setAttribute('aria-label', 'Switch to Montgomery dark obsidian theme');
  }
}

/* --------------------------------------------------------------------------
   Ambient Cursor Glow Follower
   -------------------------------------------------------------------------- */
function initAmbientGlow() {
  const glow = document.querySelector('.ambient-glow');
  if (!glow || window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function render() {
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;
    glow.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

/* --------------------------------------------------------------------------
   Mobile Navigation Toggle
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('open');
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* --------------------------------------------------------------------------
   1-Click Copy Email & Toast Notification
   -------------------------------------------------------------------------- */
function initCopyEmail() {
  const copyButtons = document.querySelectorAll('.js-copy-email');
  const emailToCopy = 'ayushirathi2912@gmail.com';

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(emailToCopy).then(() => {
        showToast(`✓ ${emailToCopy} copied to clipboard!`);
      }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = emailToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`✓ ${emailToCopy} copied to clipboard!`);
      });
    });
  });
}

function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(window.__toastTimeout);
  window.__toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* --------------------------------------------------------------------------
   Interactive Montgomery Developer Terminal Widget
   -------------------------------------------------------------------------- */
function initTerminal() {
  const termBody = document.getElementById('terminal-interactive-body');
  const termBtns = document.querySelectorAll('.term-btn');
  if (!termBody) return;

  const commands = {
    whoami: () => [
      'Ayushi Rathi — Software Developer | Full Stack Developer | UI/UX Designer',
      'Christ University, Bengaluru — BCA (8.4 CGPA) [2024 – 2027]',
      'Ex UI/UX Designer & Web Developer Intern @ KD Tech Solutions, Behror',
      'JPMorgan Chase & Co. — Software Engineering Virtual Experience',
      'Direct Mail: ayushirathi2912@gmail.com • Bengaluru, Karnataka'
    ],
    skills: () => [
      '⚡ Languages: C++, Python, JavaScript, Java, TypeScript, SQL',
      '🤖 AI & ML: LLMs, Generative AI, Prompt Engineering, RAG, Embeddings, Vector DBs, Gemini API',
      '🎨 Frontend: HTML5, CSS3, React.js, Responsive Web Design, UI/UX Wireframing',
      '🛠️ Backend: Node.js, Express.js, MySQL, MongoDB, REST APIs, Flask, Auth',
      '☁️ Cloud: AWS (EC2, VPC, IAM, S3, Route 53, CloudWatch, Load Balancer)'
    ],
    contact: () => [
      '📫 Email: ayushirathi2912@gmail.com',
      '💼 GitHub: github.com/Ayushiiiii13',
      '📍 Location: Bengaluru, Karnataka, India'
    ],
    projects: () => [
      '01. Bridgeable — Accessibility Virtual Meeting Platform (MERN, Sign-Language AI, STT/TTS)',
      '02. AI-Powered Resume ATS Checker — 4-stage pipeline (Python, Gemini API, LLM, RAG)',
      '03. Food Delivery Web Application — Full-stack ordering platform (Node.js, Express, MySQL)'
    ],
    clear: () => []
  };

  function runCommand(cmdKey) {
    if (cmdKey === 'clear') {
      termBody.innerHTML = `
        <div class="term-line">
          <span class="term-prompt">ayushi@montgomery:~$</span>
          <span class="term-cmd">clear</span>
        </div>
      `;
      return;
    }

    const outputLines = commands[cmdKey] ? commands[cmdKey]() : [`Command not found: ${cmdKey}. Try whoami, skills, contact, projects, clear.`];
    
    const block = document.createElement('div');
    block.innerHTML = `
      <div class="term-line" style="margin-top: 0.75rem;">
        <span class="term-prompt">ayushi@montgomery:~$</span>
        <span class="term-cmd">${cmdKey}</span>
      </div>
      <div class="term-output">
        ${outputLines.map(line => `<div>${line}</div>`).join('')}
      </div>
    `;
    termBody.appendChild(block);
    termBody.scrollTop = termBody.scrollHeight;
  }

  termBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd) runCommand(cmd);
    });
  });
}

/* --------------------------------------------------------------------------
   Project Filtering Tabs
   -------------------------------------------------------------------------- */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length === 0 || projectCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; }, 10);
        } else {
          card.style.opacity = '0';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   Contact Form Validation
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusMsg = document.getElementById('form-status');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['name']?.value.trim();
    const email = form.elements['email']?.value.trim();
    const subject = form.elements['subject']?.value.trim() || 'Portfolio Inquiry';
    const message = form.elements['message']?.value.trim();

    if (!name || !email || !message) {
      showStatus('Please fill in all required fields (Name, Email, Message).', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showStatus('Please enter a valid email address.', 'error');
      return;
    }

    showStatus(`Thank you, ${name}! Your message has been prepared. You can also reach me directly at ayushirathi2912@gmail.com.`, 'success');
    showToast('✓ Note saved! ayushirathi2912@gmail.com is ready to receive.');
    form.reset();
  });

  function showStatus(text, type) {
    if (!statusMsg) return;
    statusMsg.textContent = text;
    statusMsg.className = `form-status ${type}`;
    statusMsg.style.display = 'block';
  }
}
