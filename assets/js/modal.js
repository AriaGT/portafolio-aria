modal = document.querySelector('.form_container')
closeBtn = document.querySelector('.modal_closeBtn')
openBtn = document.querySelector('.contactme')
onSubmit = document.querySelector('.button_submit')

closeBtn.addEventListener('click', () => {
  modal.classList.toggle('modal_active')
})

openBtn.addEventListener('click', () => {
  modal.classList.toggle('modal_active')
})

onSubmit.addEventListener('click', () => {
  modal.classList.toggle('modal_active')
})