import restaurantSource from '../../data/restaurant-source'
import config from '../../globals/config'
import {
  createRestaurantItem,
  restaurantLoading,
} from '../templates/card-creator'
import { errorText } from '../templates/error-creator'

const Home = {
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
    const restaurantsContainer = document.querySelector('#restaurantList')
    for (let i = 0; i < config.long_list; i += 1) {
      restaurantsContainer.innerHTML += restaurantLoading()
    }

    const restaurants = await restaurantSource.getList()
    if (!restaurants) {
      const statusContainer = document.querySelector('#statusRestaurant')
      statusContainer.innerHTML = errorText(
        'Oppss.. Terjadi masalah! Silahkan coba lagi beberapa saat!'
      )
      restaurantsContainer.innerHTML = ''
      return
    }

    restaurantsContainer.innerHTML = ''
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItem(restaurant)
    })
  },
}

export default Home
