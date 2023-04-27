console.log('teste')
import { masks } from './mask.js'

let form = document.getElementById('form')
let number = document.getElementById('number')
let messenger = document.getElementById('messenger')
const button = document.getElementById('button')

button.addEventListener('click', e => {
  let phone = number.value
    .trim()
    .replaceAll(' ', '')
    .replace(/[\])}[{(-]/g, '')
  let messenge = messenger.value.replaceAll(' ', '%20')

  let url = `https://api.whatsapp.com/send?phone=55${phone}&text=${messenge}.`
  console.log(url)

  button.href = url
  console.log(document.querySelector('#button'))
})
