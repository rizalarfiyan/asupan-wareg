import 'regenerator-runtime';
import '../styles/main.scss';
import { restaurants as dataPost} from '../DATA.json';

// Adaptive from https://codepen.io/hi-im-si/pen/DHoup
let typewrite = function(el, text, time) {
  this.text = text;
  this.el = el;
  this.loop = 0;
  this.time = parseInt(time, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDelete = false;
};

typewrite.prototype.tick = function() {
  let i = this.loop % this.text.length;
  let t = this.text[i];

  this.txt = this.isDelete ? t.substring(0, this.txt.length - 1) : t.substring(0, this.txt.length + 1)
  this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

  let that = this;
  let delta = 200 - Math.random() * 100;
  if (this.isDelete) delta /= 2

  if (!this.isDelete && this.txt === t) {
    delta = this.time;
    this.isDelete = true;
  } else if (this.isDelete && this.txt === '') {
    this.isDelete = false;
    this.loop++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
}

window.onload = function() {
  let typewrites = document.getElementsByClassName('typewrite');
  for (let i=0; i < typewrites.length; i++) {
    let text = typewrites[i].getAttribute('data-text');
    let time = typewrites[i].getAttribute('data-time');
    if (text) {
      new typewrite(typewrites[i], JSON.parse(text), time);
    }
  }
};

// Helpers
const limiter = (long, text) => {
  return !long || text.length <= long ? text : `${text.slice(0, long)} ...`
}

// Dom Manipulation JSON
let elemContent = document.getElementById('content');
dataPost.forEach((post) => {
  let { name, description, pictureId, city, rating } = post;
  let node = document.createElement('div');
  node.className = 'card';
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
    <p>${limiter(120, description)}</p>
  </div>`
  elemContent.append(node);
});

// Navigation Drawer
let myNav = document.querySelector('#navigation');
let clickNav = myNav.querySelectorAll('button.hamburger, .overlay');

clickNav.forEach(item => {
  item.addEventListener('click', e => {
    myNav.classList.toggle('is-open');
    e.stopPropagation();
  })
})

document.onkeydown = function(e) {
  e = e || window.event;
  let isEsc = false;
  isEsc = 'key' in e ? (e.key === 'Escape' || e.key === 'Esc') : (e.keyCode === 27);
  if (isEsc && myNav.classList.contains('is-open')) {
    myNav.classList.toggle('is-open');
  }
};


// Footer
let date = new Date();
let year = date.getFullYear();
let elmCopy = document.getElementById('year');
elmCopy.innerHTML = year === 2021 ? year : `2021 - ${year}`;