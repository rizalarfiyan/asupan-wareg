import UrlParser from '../../routes/url-parser'
import restaurantSource from '../../data/restaurant-source'

const Detail = {
  async render() {
    return `
      <section class="detail-page">
        <div class="container" id="restaurantDetail">
        </div>
      </section>
    `
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await restaurantSource.getDetail(url.id)
    console.log(restaurant, 'restaurants')
  },
}

export default Detail
