document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      if (!item.classList.contains('disabled')) {
        // Remove active class from all items
        navItems.forEach(navItem => navItem.classList.remove('active'));
        
        // Add active class to the clicked item
        item.classList.add('active');

        // Show corresponding form step
        showStep(index + 1); // Adjust index as per your form step indices
      }
    });
  });

  function showStep(stepIndex) {
    // Implement logic to show/hide form steps based on stepIndex
    // Example: Show/hide form sections based on stepIndex
    const formSteps = document.querySelectorAll('.step');
    formSteps.forEach((step, index) => {
      if (index === stepIndex - 1) {
        step.style.display = 'block';
      } else {
        step.style.display = 'none';
      }
    });
  }

  // Initialize: Show first form step
  showStep(1);
});
