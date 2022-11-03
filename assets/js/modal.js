modal = document.querySelector('.form_container')
closeBtn = document.querySelector('.modal_closeBtn')
openBtn = document.querySelector('.contactme')
onSubmit = document.querySelector('.button_submit')

closeBtn.addEventListener('click', () => {
  modal.classList.toggle('modal_active')
  setTimeout(() => {
    modal.classList.toggle('hiden')
  }, 200)
})

openBtn.addEventListener('click', () => {
  modal.classList.toggle('modal_active')
  modal.classList.toggle('hiden')
})

onSubmit.addEventListener('click', () => {
  modal.classList.toggle('modal_active')
  setTimeout(() => {
    modal.classList.toggle('hiden')
  }, 200)
})