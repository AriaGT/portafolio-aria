const switchBtn = document.querySelector('.switch')

switchBtn.addEventListener('click', () => {
  switchBtn.classList.toggle('mode-active')
  document.body.classList.toggle('dark')
})

