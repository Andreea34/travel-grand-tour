// LAYOUT BREAKPOINT = 55em (880px)
window.addEventListener('DOMContentLoaded', (e) => {
  //console.log('DOMContentLoaded === DOM loaded & parsed');
  //console.log('load === page + dependencies fully loaded');

  const menu = document.querySelector('#page-menu > ol');
  const toggle = document.querySelector('#page-menu-toggle');

  function frameMenu() {
    if (window.innerWidth >= 880 && menu.classList.contains('frame-light')) {
      menu.classList.remove('frame-light');
    }
    else if (window.innerWidth < 880 && !menu.classList.contains('frame-light')) {
      menu.classList.add('frame-light');
    }
  }

  function toggleMenu() {
    if (window.innerWidth >= 880 && toggle.checked) {
      toggle.checked = false;
    }
  }

  // on page load
  frameMenu();

  // on window resize
  window.addEventListener('resize', function (e) {
    frameMenu();
    toggleMenu();
  });

});