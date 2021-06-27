import 'regenerator-runtime'
import '../styles/main.scss'
import App from './views/app'

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelectorAll('button.hamburger, .overlay'),
  drawer: document.querySelector('#navigation'),
  typewrite: document.querySelector('.typewrite'),
})
