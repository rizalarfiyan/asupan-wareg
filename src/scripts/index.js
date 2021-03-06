import 'regenerator-runtime'
import '../styles/main.scss'
import App from './views/app'
import swRegister from './utils/sw-register'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const app = new App({
  content: document.querySelector('#main-content'),
  button: document.querySelectorAll('button.hamburger, .overlay'),
  searchForm: document.querySelector('#searchForm'),
  drawer: document.querySelector('#navigation'),
  typewrite: document.querySelector('.typewrite'),
  year: document.getElementById('year'),
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
