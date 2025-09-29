// Text overlay click functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('nav a');
  
  // Add click event listener to each link
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default link behavior
      
      // First, remove 'clicked' class from ALL links (including this one)
      navLinks.forEach(otherLink => {
        otherLink.classList.remove('clicked');
      });
      
      // Then add 'clicked' class only to the clicked link
      this.classList.add('clicked');
    });
    
    // Add mouseover event to hide text overlays when hovering over other images
    link.addEventListener('mouseover', function(e) {
      // Remove 'clicked' class from ALL links when hovering over any image
      navLinks.forEach(otherLink => {
        otherLink.classList.remove('clicked');
      });
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