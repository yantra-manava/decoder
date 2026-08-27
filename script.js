/* ==========================================================================
   DECODER - PREMIUM PROFILE JAVASCRIPT CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. NEWSLETTER FORM HANDLER (WITH LOCAL STORAGE CAPTURE & CONFIRMATION)
  // ==========================================================================
  const newsletterForm = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('subscriber-email');
  const formToast = document.getElementById('form-toast');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();

      if (email) {
        // Save subscriber to browser localStorage
        try {
          const subscribers = JSON.parse(localStorage.getItem('decoder_subscribers') || '[]');
          if (!subscribers.includes(email)) {
            subscribers.push(email);
            localStorage.setItem('decoder_subscribers', JSON.stringify(subscribers));
          }
        } catch (err) {
          console.log('LocalStorage storage fallback:', err);
        }

        // Show confirmation toast
        formToast.className = 'form-toast success';
        formToast.innerHTML = `✓ Thank you! <strong>${email}</strong> has been added to the Decoder newsletter list.`;
        emailInput.value = '';

        setTimeout(() => {
          formToast.innerHTML = '';
        }, 6000);
      }
    });
  }

  // ==========================================================================
  // 2. MOBILE MENU TOGGLE
  // ==========================================================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = navLinks.style.display === 'flex';
      navLinks.style.display = isExpanded ? 'none' : 'flex';
      if (!isExpanded) {
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(8, 10, 9, 0.96)';
        navLinks.style.flexDirection = 'column';
        navLinks.style.padding = '1.5rem';
        navLinks.style.borderBottom = '1px solid var(--border-light)';
      }
    });
  }

});
