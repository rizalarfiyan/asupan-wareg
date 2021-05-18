import 'regenerator-runtime';
import '../styles/main.scss';

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
