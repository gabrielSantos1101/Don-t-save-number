import { masks } from './mask.js'

let form = document.getElementById('form')
let number = document.getElementById('number')
let messenger = document.getElementById('messenger')


form.addEventListener('submit', event => {
  event.preventDefault()
  let phone = number.value.trim()
  let messenge = messenger.value.replaceAll(' ', '%20')

  let url = `https://api.whatsapp.com/send?phone=55${phone}&text=${messenge}.`

  window.location.href = url
})


