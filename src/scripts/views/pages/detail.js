import config from '../../globals/config'
import { limitText } from '../../globals/helpers'
import UrlParser from '../../routes/url-parser'
import LikeButton from '../../utils/like-button'
import restaurantSource from '../../data/restaurant-source'
import {
  detailLoading,
  createDetailPage,
  reviewsElement,
  reviewsLoading,
} from '../templates/detail-page-creator'
import { errorText } from '../templates/error-creator'
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb'

const Detail = {
  async render() {
    return `
      <section class="detail-page">
        <div id="statusDetail"></div>
        <div class="container" id="detailPage">
        </div>
      </section>
    `
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurantsContainer = document.querySelector('#detailPage')
    restaurantsContainer.innerHTML = detailLoading()

    const restaurant = await restaurantSource.getDetail(url.id)

    const statusContainer = document.querySelector('#statusDetail')
    if (!restaurant) {
      statusContainer.innerHTML = errorText(
        'Oppss.. Terjadi masalah! Silahkan coba lagi beberapa saat!'
      )
      restaurantsContainer.innerHTML = ''
      return
    }

    if (restaurant.error) {
      statusContainer.innerHTML = errorText('Oppss.. Tidak ada restoran!')
      restaurantsContainer.innerHTML = ''
      return
    }

    restaurantsContainer.innerHTML = createDetailPage(restaurant.restaurant)
    this._likeButtonInit(restaurant.restaurant)
    this._submitReview()
  },

  _likeButtonInit(restaurant) {
    LikeButton.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        description: limitText(config.limit_card, restaurant.description),
      },
    })
  },

  _submitReview() {
    const formElement = document.querySelector('#reviewForm')
    const reviewsContainer = document.querySelector('#reviewData')
    formElement.addEventListener('submit', async (event) => {
      event.preventDefault()

      reviewsContainer.innerHTML = Array.from(Array(config.long_review).keys())
        .map(() => reviewsLoading())
        .join(' ')

      const formData = Object.fromEntries(new FormData(formElement).entries())
      const idRestaurant = formElement.getAttribute('data-id')
      const sendStatus = await restaurantSource.sendReview(
        Object.assign(formData, { id: idRestaurant })
      )
      if (!sendStatus) {
        // eslint-disable-next-line no-alert
        alert('Oppss.. Terjadi masalah! Silahkan coba lagi beberapa saat!')
        return
      }

      reviewsContainer.innerHTML = sendStatus.customerReviews
        .reverse()
        .map((elem) => reviewsElement(elem))
        .join(' ')

      formElement.reset()
    })
  },
}

export default Detail
