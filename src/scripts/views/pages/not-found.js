import { errorText } from '../templates/error-creator'

const NotFound = {
  async render() {
    return `
      <section class="result">
        <div id="errorPage"></div>
      </section>
    `
  },

  async afterRender() {
    const statusContainer = document.querySelector('#errorPage')
    statusContainer.innerHTML = errorText('Oppss.. Halaman tidak ditemukan!')
  },
}

export default NotFound
