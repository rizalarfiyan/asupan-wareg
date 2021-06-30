/* eslint-disable no-nested-ternary */
class Shine extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' })
    const shine = document.createElement('div')
    shine.style.width = this.getAttribute('width') || '100%'
    shine.style.height = this._getHeight(this.getAttribute('height'))
    shine.style.marginBottom = this.getAttribute('mb') || '0'
    shine.className = `shine ${this.hasAttribute('full') ? 'full' : ''}`.trim()

    const style = document.createElement('style')
    style.textContent = `
    .shine {
      background: rgb(var(--placeholder));
      background-image: linear-gradient(to right, rgb(var(--placeholder)) 0%, rgba(var(--semi-dark), .2) 20%, rgb(var(--placeholder)) 40%, rgb(var(--placeholder)) 100%);
      background-repeat: no-repeat;
      background-size: 100% 100%; 
      display: inline-block;
      position: relative; 
      border-radius: 4px;
      animation: infinite placeholderShimmer 1s forwards linear;
    }
    
    .shine.full {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
    
    @keyframes placeholderShimmer {
      0% {
        background-position: -600px 0;
      }
      
      100% {
        background-position: 600px 0; 
      }
    }`

    shadow.appendChild(style)
    shadow.appendChild(shine)
  }

  _getHeight(height) {
    switch (height) {
      case '1':
        return '18px'
      case '2':
        return '34px'
      case '3':
        return '50px'
      default:
        return !height ? '100%' : height
    }
  }
}

export default Shine
