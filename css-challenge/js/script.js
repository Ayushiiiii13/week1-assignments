// ==========================================================================
// CSS Challenge Interactive Controls
// Author: Alex Chen
// Purpose: Interactive toggles to demonstrate layout & animation responsiveness
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initFlexToggle();
  initGridAddDemo();
});

// Interactive Flex Direction Switcher (Allows testing desktop row vs mobile stack at will)
function initFlexToggle() {
  const toggleBtn = document.getElementById('toggle-flex-mode');
  const flexContainer = document.querySelector('.flexbox-container');

  if (!toggleBtn || !flexContainer) return;

  toggleBtn.addEventListener('click', () => {
    const isColumn = flexContainer.style.flexDirection === 'column';
    if (isColumn) {
      flexContainer.style.flexDirection = 'row';
      toggleBtn.textContent = '🔄 Simulate Mobile Stack (Column)';
    } else {
      flexContainer.style.flexDirection = 'column';
      toggleBtn.textContent = '🔄 Reset to Desktop (Row)';
    }
  });
}

// Interactive animation re-trigger
function initGridAddDemo() {
  const replayBtn = document.getElementById('replay-animations');
  if (!replayBtn) return;

  replayBtn.addEventListener('click', () => {
    const animCards = document.querySelectorAll('.anim-card');
    animCards.forEach(card => {
      card.style.animation = 'none';
      card.offsetHeight; // Trigger reflow
      card.style.animation = '';
    });
  });
}
