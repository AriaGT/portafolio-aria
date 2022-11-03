let ubication = window.pageYOffset
let nav = document.querySelector('.header')

window.addEventListener('scroll', () => {
  let ubicationNow = window.pageYOffset
  if (ubication >= ubicationNow) {
    nav.style.top = '0px'
  } else {
    nav.style.top = '-100px'
  }

  ubication = ubicationNow
})