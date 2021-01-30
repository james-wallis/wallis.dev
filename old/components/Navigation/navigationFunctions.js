function toggleNavigationBackground() {
  const nav = document.getElementsByTagName('nav')[0];
  const navName = document.getElementsByClassName('nav-name')[0];
  const background = document.getElementsByClassName('headings')[0];
  const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  if (scrollTop && scrollTop !== 0 && scrollTop > (background.offsetHeight - nav.offsetHeight) && !nav.classList.contains('dark')) {
    nav.classList.add('dark');
    navName.style.opacity = '1';
  } else if (scrollTop && scrollTop !== 0 && scrollTop < (background.offsetHeight - nav.offsetHeight) && nav.classList.contains('dark')) {
    nav.classList.remove('dark');
    navName.style.opacity = '0';
  }
}

function normaliseNavigation() {
  const nav = document.getElementsByTagName('nav')[0];
  const navName = document.getElementsByClassName('nav-name')[0];
  nav.classList.remove('dark');
  navName.style.opacity = '0';
}

function dimNavigation(e) {
  const ul = e.currentTarget;
  const target = e.target;
  if (!ul.classList.contains('dim')) {
    ul.classList.add('dim');
  }
  if (target.tagName.toLowerCase() === 'a') {
    target.parentNode.classList.add('hover');
  }
}

function showNavigation(e) {
  const ul = e.currentTarget;
  if (ul.classList.contains('dim')) {
    ul.classList.remove('dim');
  }
}

function removeHover(e) {
  const el = e.currentTarget;
  el.parentNode.classList.remove('hover');
}

function openMenu() {
  const nav = document.getElementsByTagName('nav')[0];
  const ul = nav.getElementsByTagName('ul')[0];
  ul.style.marginLeft = 0;
}

function closeMenu() {
  const nav = document.getElementsByTagName('nav')[0];
  const ul = nav.getElementsByTagName('ul')[0];
  ul.style.marginLeft = '';
}

function calculateNavBarHeight() {
  const nav = document.getElementsByTagName('nav')[0];
  return -(nav.offsetHeight)+2;
}

module.exports = {
  toggleNavigationBackground,
  normaliseNavigation,
  dimNavigation,
  showNavigation,
  removeHover,
  openMenu,
  closeMenu,
  calculateNavBarHeight
}