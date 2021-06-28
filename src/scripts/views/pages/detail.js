import UrlParser from '../../routes/url-parser'
import restaurantSource from '../../data/restaurant-source'
import {
  createDetailPage,
  reviewsElement,
} from '../templates/detail-page-creator'

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
    await this.submitReview()
  },

  submitReview() {
    const formElement = document.querySelector('#reviewForm')
    formElement.addEventListener('submit', async (event) => {
      event.preventDefault()
      const formData = Object.fromEntries(new FormData(formElement).entries())
      const idRestaurant = formElement.getAttribute('data-id')
      const sendStatus = await restaurantSource.sendReview(
        Object.assign(formData, { id: idRestaurant })
      )
      await this.loadNewReview(sendStatus.customerReviews)
      formElement.reset()
    })
  },

  async loadNewReview(review) {
    const reviewsContainer = document.querySelector('#reviewData')
    reviewsContainer.innerHTML = review
      .reverse()
      .map((elem) => reviewsElement(elem))
      .join(' ')
  },
}

export default Detail
