import restaurantSource from '../../data/restaurant-source'
import createRestaurantItem from '../templates/card-creator'
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
    const restaurants = await restaurantSource.getList()
    if (!restaurants) {
      const statusContainer = document.querySelector('#statusRestaurant')
      statusContainer.innerHTML = errorText(
        'Oppss.. Terjadi masalah! Silahkan coba lagi beberapa saat!'
      )
      return
    }
    const restaurantsContainer = document.querySelector('#restaurantList')
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItem(restaurant)
    })
  },
}

export default Home
