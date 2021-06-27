/* eslint-disable no-param-reassign */
import 'regenerator-runtime'
import '../styles/main.scss'
import { restaurants as dataPost } from '../DATA.json'

// Adaptive from https://codepen.io/hi-im-si/pen/DHoup
const Typewrite = function (el, text, time) {
  this.text = text
  this.el = el
  this.loop = 0
  this.time = parseInt(time, 10) || 2000
  this.txt = ''
  this.tick()
  this.isDelete = false
}

Typewrite.prototype.tick = function () {
  const i = this.loop % this.text.length
  const t = this.text[i]

  this.txt = this.isDelete
    ? t.substring(0, this.txt.length - 1)
    : t.substring(0, this.txt.length + 1)
  this.el.innerHTML = `<span class="wrap">${this.txt}</span>`

  const that = this
  let delta = 200 - Math.random() * 100
  if (this.isDelete) delta /= 2

  if (!this.isDelete && this.txt === t) {
    delta = this.time
    this.isDelete = true
  } else if (this.isDelete && this.txt === '') {
    this.isDelete = false
    this.loop += 1
    delta = 500
  }

  setTimeout(() => {
    that.tick()
  }, delta)
}

window.onload = function () {
  const typewrites = document.getElementsByClassName('typewrite')
  for (let i = 0; i < typewrites.length; i += 1) {
    const text = typewrites[i].getAttribute('data-text')
    const time = typewrites[i].getAttribute('data-time')
    if (text) {
      const typewrite = new Typewrite(typewrites[i], JSON.parse(text), time)
      typewrite()
    }
  }
}

// Helpers
const limiter = (long, text) =>
  !long || text.length <= long ? text : `${text.slice(0, long)} ...`

// Dom Manipulation JSON
const elemContent = document.getElementById('content')
dataPost.forEach((post) => {
  const { name, description, pictureId, city, rating } = post
  const node = document.createElement('div')
  node.className = 'card'
  node.innerHTML = `<div class="image">
    <a href="#" class="rating">
      <span>${rating}</span>
    </a>
    <img class="cover" src="${pictureId}" alt="${name}">
    <a href="#" class="location">${city}</a>
  </div>
  <div class="content">
    <a href="#">
      <h2 class="h4">${name}</h2>
    </a>
    <p>${limiter(90, description)}</p>
  </div>`
  elemContent.append(node)
})

// Navigation Drawer
const myNav = document.querySelector('#navigation')
const clickNav = myNav.querySelectorAll('button.hamburger, .overlay')

clickNav.forEach((item) => {
  item.addEventListener('click', (e) => {
    myNav.classList.toggle('is-open')
    e.stopPropagation()
  })
})

document.onkeydown = function (e) {
  const event = e || window.event
  const isEsc =
    'key' in event
      ? event.key === 'Escape' || event.key === 'Esc'
      : event.keyCode === 27
  if (isEsc && myNav.classList.contains('is-open')) {
    myNav.classList.toggle('is-open')
  }
}

// Footer
const footerInit = () => {
  const date = new Date()
  const year = date.getFullYear()
  const elmCopy = document.getElementById('year')
  elmCopy.innerHTML = year === 2021 ? year : `2021 - ${year}`
}

footerInit()
