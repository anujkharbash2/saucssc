export function createNavigation(currentPath) {
  const hamburgerMenu = `
    <div class="hamburger">
      <div></div>
      <div></div>
      <div></div>
    </div>
  `;

  return `
    <nav class="navbar">
      <div class="logo">SAUCSSC</div>
      ${hamburgerMenu}
      <ul class="nav-links">
        <li><a href="${currentPath}index.html">Home</a></li>
        <li><a href="${currentPath}pages/courses.html">SAU Courses</a></li>
        <li><a href="${currentPath}pages/events.html">Events</a></li>
        <li><a href="${currentPath}pages/news.html">News & Updates</a></li>
      </ul>
    </nav>
  `;
}

export function initializeNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}