import restaurantSource from '../../data/restaurant-source'
import config from '../../globals/config'
import {
  createRestaurantItem,
  restaurantLoading,
} from '../templates/card-creator'
import { capitalizeFirst } from '../../globals/helpers'
import { resultText, errorText } from '../templates/error-creator'
import UrlParser from '../../routes/url-parser'

const City = {
  async render() {
    return `
      <section class="result">
        <div id="statusRestaurant"></div>
        <div class="container">
          <div class="wrap-card" id="restaurantList"></div>
        </div>
      </section>
    `
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurantsContainer = document.querySelector('#restaurantList')
    for (let i = 0; i < config.long_list; i += 1) {
      restaurantsContainer.innerHTML += restaurantLoading()
    }

    const restaurants = await restaurantSource.getList()
    const statusContainer = document.querySelector('#statusRestaurant')
    if (!restaurants) {
      statusContainer.innerHTML = errorText(
        'Oppss.. Terjadi masalah! Silahkan coba lagi beberapa saat!'
      )
      restaurantsContainer.innerHTML = ''
      return
    }

    const city = capitalizeFirst(url.id)
    const filterRestaurant = restaurants.filter(
      (restaurant) => restaurant.city === city
    )

    if (filterRestaurant.length === 0) {
      statusContainer.innerHTML = errorText(
        `Oppss.. Tidak ada hasil kota dari "${city}"`
      )
      restaurantsContainer.innerHTML = ''
      return
    }

    statusContainer.innerHTML = resultText(`Menampilkan kota dari "${city}"`)
    restaurantsContainer.innerHTML = ''
    filterRestaurant.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItem(restaurant)
    })
  },
}

export default City
