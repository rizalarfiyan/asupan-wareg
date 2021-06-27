const MenuDrawer = {
  init({ button, drawer }) {
    window.addEventListener('keydown', (event) => {
      const newEvent = event || window.event
      const isEsc =
        'key' in newEvent
          ? newEvent.key === 'Escape' || newEvent.key === 'Esc'
          : newEvent.keyCode === 27
      if (isEsc && drawer.classList.contains('is-open')) {
        this._closeDrawer(event, drawer)
      }
    })

    button.forEach((item) => {
      item.addEventListener('click', (evt) => {
        this._toggleDrawer(evt, drawer)
      })
    })
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation()
    drawer.classList.toggle('is-open')
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation()
    drawer.classList.remove('is-open')
  },
}

export default MenuDrawer
