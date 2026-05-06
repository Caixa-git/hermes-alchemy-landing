/* ============================================
   HERMES ALCHEMY — Landing Page
   Light interactivity
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Decision button interaction
  document.querySelectorAll('.action-decision').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.action-decision').forEach(b => b.style.opacity = '0.4');
      btn.style.opacity = '1';
      btn.style.transform = 'scale(1.05)';
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
