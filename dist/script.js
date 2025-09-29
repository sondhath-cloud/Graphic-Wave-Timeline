// Text overlay click functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('nav a');
  
  // Add click event listener to each link
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default link behavior
      
      // Remove 'clicked' class from all other links
      navLinks.forEach(otherLink => {
        if (otherLink !== this) {
          otherLink.classList.remove('clicked');
        }
      });
      
      // Toggle 'clicked' class on the clicked link
      this.classList.toggle('clicked');
      
      // Optional: Add a small delay to show the text before hiding it
      // Uncomment the lines below if you want the text to auto-hide after 3 seconds
      /*
      if (this.classList.contains('clicked')) {
        setTimeout(() => {
          this.classList.remove('clicked');
        }, 3000);
      }
      */
    });
  });
  
  // Optional: Click outside to hide all text overlays
  document.addEventListener('click', function(e) {
    // Check if click is outside of nav
    if (!e.target.closest('nav')) {
      navLinks.forEach(link => {
        link.classList.remove('clicked');
      });
    }
  });
});