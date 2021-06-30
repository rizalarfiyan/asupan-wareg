import CustomElements from '../utils/custom-elements'
import MenuDrawer from '../utils/menu-drawer'
import Search from '../utils/search'
import Typewrite from '../utils/typewrite'
import Footer from '../utils/footer'
import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'

class App {
  constructor({ content, button, searchForm, drawer, typewrite, year }) {
    this._content = content
    this._button = button
    this._searchForm = searchForm
    this._drawer = drawer
    this._typewrite = typewrite
    this._year = year

    this._initialAppShell()
  }

  _initialAppShell() {
    CustomElements.init()

    MenuDrawer.init({
      button: this._button,
      drawer: this._drawer,
    })

    Search.init({
      searchForm: this._searchForm,
    })

    Typewrite.init({
      typewrite: this._typewrite,
    })

    Footer.init({
      year: this._year,
    })
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    await page.afterRender()
  }
}

export default App
