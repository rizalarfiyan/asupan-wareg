import restaurantSource from '../../data/restaurant-source'
import createRestaurantItem from '../templates/card-creator'

const Home = {
  async render() {
    return `
      <section class="result">
        <div class="container">
          <div class="wrap-card" id="restaurantList"></div>
        </div>
      </section>
    `
  },

  async afterRender() {
    const restaurants = await restaurantSource.getList()
    const restaurantsContainer = document.querySelector('#restaurantList')
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItem(restaurant)
    })
  },
}

export default Home
