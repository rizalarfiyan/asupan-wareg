const Typewrite = {
  init({ typewrite }) {
    const text = typewrite.getAttribute('data-text')
    const time = typewrite.getAttribute('data-time')
    if (text) {
      this._create(typewrite, JSON.parse(text), time)
    }
  },

  _create(el, text, time) {
    this.text = text
    this.el = el
    this.loop = 0
    this.time = parseInt(time, 10) || 2000
    this.txt = ''
    this._tick()
    this.isDelete = false
  },

  _tick() {
    const index = this.loop % this.text.length
    const getText = this.text[index]

    this.txt = this.isDelete
      ? getText.substring(0, this.txt.length - 1)
      : getText.substring(0, this.txt.length + 1)
    this.el.innerHTML = `<span class="wrap">${this.txt}</span>`

    let delta = 200 - Math.random() * 100
    if (this.isDelete) delta /= 2

    if (!this.isDelete && this.txt === getText) {
      delta = this.time
      this.isDelete = true
    } else if (this.isDelete && this.txt === '') {
      this.isDelete = false
      this.loop += 1
      delta = 500
    }

    setTimeout(() => {
      this._tick()
    }, delta)
  },
}

export default Typewrite
