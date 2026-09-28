// ==========================================================================
// Lumina Creative Agency - Landing Page Scripts
// Author: Alex Chen
// Purpose: Mobile navigation, scroll-aware navbar, and form handling
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollNav();
  initInquiryForm();
});

/* Mobile Menu Navigation */
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isOpen = navLinks.classList.contains('active');
    menuBtn.setAttribute('aria-expanded', isOpen);
    menuBtn.innerHTML = isOpen ? '✕' : '☰';
  });

  // Close menu when clicking on any navigation link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.innerHTML = '☰';
    });
  });
}

/* Header style change on window scroll */
function initScrollNav() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* Project Inquiry Form Validation & Submission Simulation */
function initInquiryForm() {
  const form = document.getElementById('inquiry-form');
  const alertBox = document.getElementById('form-alert');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['client-name']?.value.trim();
    const email = form.elements['client-email']?.value.trim();
    const service = form.elements['service-type']?.value;
    const message = form.elements['project-details']?.value.trim();

    if (!name || !email || !service || !message) {
      showAlert('Please complete all required fields marked with an asterisk (*).', 'error');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showAlert('Please provide a valid work email address.', 'error');
      return;
    }

    // Success response
    showAlert(
      `Thank you, ${name}! Your project inquiry for ${service} has been received. Our team will review your requirements and reach out within 24 hours.`,
      'success'
    );
    form.reset();
  });

  function showAlert(msg, status) {
    if (!alertBox) return;
    alertBox.textContent = msg;
    alertBox.className = `form-alert ${status}`;
    alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
