// Get the hamburger icon and the sidebar
const hamburgerIcon = document.querySelector('.hamburger');
const sidebar = document.querySelector('.side-nav');

// Add a click event listener to the hamburger icon
hamburgerIcon.addEventListener('click', () => {
  // Toggle a class that will control the visibility of the sidebar
  sidebar.classList.toggle('collapsed');
});
