/**
 * Mobile Menu Toggle
 * Handles the hamburger menu functionality for mobile devices
 */
(function() {
  'use strict';
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  function init() {
    var menuIcon = document.getElementById('menu-icon');
    var menu = document.getElementById('menu-main');
    
    if (!menuIcon || !menu) {
      return;
    }
    
    // Toggle menu on click
    menuIcon.addEventListener('click', function() {
      var isVisible = menu.style.display === 'block';
      menu.style.display = isVisible ? 'none' : 'block';
      menuIcon.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      var isClickInsideMenu = menu.contains(event.target);
      var isClickOnIcon = menuIcon.contains(event.target);
      
      if (!isClickInsideMenu && !isClickOnIcon && menu.style.display === 'block') {
        menu.style.display = 'none';
        menuIcon.classList.remove('active');
      }
    });
    
    // Close menu on window resize if going to desktop size
    var resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if (window.innerWidth > 824) {
          menu.style.display = '';
          menuIcon.classList.remove('active');
        }
      }, 250);
    });
  }
})();
