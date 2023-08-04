const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')

const colors = ['90deg, #16D9E3 0%, #30C7EC 47%, #46AEF7 100%', '90deg, rgba(143,200,16,1) 0%, rgba(29,224,127,1) 35%, rgba(20,140,46,1) 100%', '90deg, #50e316 0%, #30C7EC 47%, #4f1dd8 100%', '90deg, rgba(144,25,16,1) 0%, rgba(193,76,76,1) 35%, rgba(189,116,57,1) 100%']

let time = 0;
let score = 0;


startBtn.addEventListener('click', (event) => {
  event.preventDefault()
  screens[0].classList.add('up')
})



timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()
  }
})


board.addEventListener('click', (event) => {
  if(event.target.classList.contains('circle')) {
    event.target.remove();
    score++;
    createCircle()
    
    
  }
})


function startGame() {
  
  setInterval(decurTime, 1000)
  setTime(time)
  createCircle()
}





function decurTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
    if (current < 10 ) {
      current = `0${current}`
    }
    setTime(current)
  }
  
}


function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}


function finishGame() {
  board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
}

function createCircle() {
  const circle = document.createElement('div')
  circle.classList.add('circle');
  board.append(circle)
  const colorRan = colorRandom()
  const size = circleRandom(10,60)
  const {width, height} = board.getBoundingClientRect()
  const x = circleRandom(0, width - size);
  const y = circleRandom(0, height - size);
  circle.style.cssText = `background: linear-gradient(${colorRan});`
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
}

function circleRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function colorRandom() {
  
  const color = Math.floor(Math.random() * colors.length)
  return colors[color]
  
}
