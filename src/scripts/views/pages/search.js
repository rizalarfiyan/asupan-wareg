import restaurantSource from '../../data/restaurant-source'
import config from '../../globals/config'
import {
  createRestaurantItem,
  restaurantLoading,
} from '../templates/card-creator'
import { resultText, errorText } from '../templates/error-creator'
import UrlParser from '../../routes/url-parser'

const Search = {
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
    const query = UrlParser.getQuery('q')
    const restaurantsContainer = document.querySelector('#restaurantList')
    for (let i = 0; i < config.long_list; i += 1) {
      restaurantsContainer.innerHTML += restaurantLoading()
    }

    const restaurants = await restaurantSource.getSearch(query)
    const statusContainer = document.querySelector('#statusRestaurant')

    if (!restaurants) {
      statusContainer.innerHTML = errorText(
        'Oppss.. Terjadi masalah! Silahkan coba lagi beberapa saat!'
      )
      restaurantsContainer.innerHTML = ''
      return
    }

    if (restaurants.founded === 0) {
      statusContainer.innerHTML = errorText(
        'Oppss.. Tidak ada hasil dari pencarian!'
      )
      restaurantsContainer.innerHTML = ''
      return
    }

    const searchText = decodeURIComponent(query.replace(/\+/g, ' '))
    statusContainer.innerHTML = resultText(
      `Menampilkan hasil dari "${searchText}"`
    )

    restaurantsContainer.innerHTML = ''
    restaurants.restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItem(restaurant)
    })
  },
}

export default Search
