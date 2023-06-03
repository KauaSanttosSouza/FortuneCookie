const Phrases = [
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Não há que ser forte. Há que ser flexível.', 
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
  'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.'
]

const screen1 = document.querySelector(".screenOne")
const screen2 = document.querySelector(".screenTwo")
const cookieClose = document.querySelector("#btnCookieClose")
const cookieOpen = document.querySelector("#btnCookieOpen")
let randomElement = Phrases[Math.floor(Math.random() * Phrases.length)]

function btnCookieClose(event) {
  event.preventDefault() 

  toggleScreen()
  randomPhrases()
}

function btnCookieOpen(event) {
  event.preventDefault() 
  
  toggleScreen()
  randomPhrases()
}

function  randomPhrases() {
  randomElement = Phrases[Math.floor(Math.random() * Phrases.length)]
  screen2.querySelector('p').innerText = randomElement
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

cookieClose.addEventListener('click', btnCookieClose)
cookieOpen.addEventListener('click', btnCookieOpen)
screen2.querySelector('p').innerText = randomElement


