import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb'
import createRestaurantItem from '../templates/card-creator'
import { avaliableFavorite, unavaliableFavorite } from '../templates/favorite-page-creator'

const Favorite = {
  async render() {
    return `
      <section class="result">
        <div class="container">
          <hr>
          <div id="statusFavorite"></div>
          <div class="wrap-card" id="restaurantList"></div>
        </div>
      </section>
    `
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants()
    const statusContainer = document.querySelector('#statusFavorite')
    statusContainer.innerHTML = restaurants.length !== 0 ? avaliableFavorite() : unavaliableFavorite()
    const restaurantsContainer = document.querySelector('#restaurantList')
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItem(restaurant)
    })
  },
}

export default Favorite
