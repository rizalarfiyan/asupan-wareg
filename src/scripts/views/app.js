import MenuDrawer from '../utils/menu-drawer'
import Typewrite from '../utils/typewrite'

class App {
  constructor({ button, drawer, typewrite }) {
    this._button = button
    this._drawer = drawer
    this._typewrite = typewrite

    this._initialAppShell()
  }

  _initialAppShell() {
    MenuDrawer.init({
      button: this._button,
      drawer: this._drawer,
    })

    Typewrite.init({
      typewrite: this._typewrite,
    })
  }
}

export default App
