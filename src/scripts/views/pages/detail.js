import UrlParser from '../../routes/url-parser'
import restaurantSource from '../../data/restaurant-source'
import createDetailPage from '../templates/detail-page-creator'

const Detail = {
  async render() {
    return `
      <section class="detail-page">
        <div class="container" id="detailPage">
        </div>
      </section>
    `
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await restaurantSource.getDetail(url.id)
    const restaurantsContainer = document.querySelector('#detailPage')
    restaurantsContainer.innerHTML = createDetailPage(restaurant)
  },
}

export default Detail
