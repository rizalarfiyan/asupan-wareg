import Shine from '../views/elements/shine'
import AppLogo from '../views/elements/logo'
import Icon from '../views/elements/icon'

const CustomElements = {
  init() {
    customElements.define('loading-shine', Shine)
    customElements.define('app-logo', AppLogo)
    customElements.define('x-icon', Icon)
  },
}

export default CustomElements
