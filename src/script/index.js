//sidebar menu toggler
document.querySelectorAll('.sidebar__menu').forEach(e => {
  e
    .getElementsByTagName('a')[0]
    .addEventListener('click', () => e.classList.toggle('sidebar__menu-active'))
})
