import Shine from '../views/elements/shine'
import AppLogo from '../views/elements/logo'

const CustomElements = {
  init() {
    customElements.define('loading-shine', Shine)
    customElements.define('app-logo', AppLogo)
  },
}

export default CustomElements
