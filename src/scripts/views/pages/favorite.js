import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb'
import { createRestaurantItem } from '../templates/card-creator'
import { resultText, errorText } from '../templates/error-creator'

const Favorite = {
  async render() {
    return `
      <section class="result">
        <div class="container">
          <div id="statusFavorite"></div>
          <div class="wrap-card" id="restaurantList"></div>
        </div>
      </section>
    `
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants()
    const statusContainer = document.querySelector('#statusFavorite')
    statusContainer.innerHTML =
      restaurants.length !== 0
        ? resultText('Menampilakan restoran favorit')
        : errorText('Oppss.. Tidak ada data restoran favorit')
    const restaurantsContainer = document.querySelector('#restaurantList')
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItem(restaurant)
    })
  },
}

export default Favorite
