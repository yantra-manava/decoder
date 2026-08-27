/* ==========================================================================
   DECODE.CO.IN - PREMIUM PROFILE JAVASCRIPT CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. STORY CATEGORY FILTERING SYSTEM
  // ==========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const storyCards = document.querySelectorAll('.story-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      storyCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            if (card.style.opacity === '0') {
              card.style.display = 'none';
            }
          }, 200);
        }
      });
    });
  });

  // ==========================================================================
  // 2. NEWSLETTER FORM HANDLER
  // ==========================================================================
  const newsletterForm = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('subscriber-email');
  const formToast = document.getElementById('form-toast');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();

      if (email) {
        formToast.className = 'form-toast success';
        formToast.innerHTML = `✓ Thank you! <strong>${email}</strong> is now subscribed to the Decode Insider newsletter.`;
        emailInput.value = '';

        setTimeout(() => {
          formToast.innerHTML = '';
        }, 5000);
      }
    });
  }

  // ==========================================================================
  // 3. MOBILE MENU TOGGLE
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
        navLinks.style.background = 'rgba(8, 12, 10, 0.96)';
        navLinks.style.flexDirection = 'column';
        navLinks.style.padding = '1.5rem';
        navLinks.style.borderBottom = '1px solid var(--border-light)';
      }
    });
  }

});
