import config from '../../globals/config'
import { limitText } from '../../globals/helpers'

const createRestaurantItem = (restaurant) => `
  <div class="card">
    <div class="image">
      <a href="#" class="rating">
        <span>${restaurant.rating}</span>
      </a>
      <img class="cover" src="${
        restaurant.pictureId
          ? config.base_image_url + restaurant.pictureId
          : 'https://picsum.photos/id/666/800/450?grayscale'
      }" alt="${restaurant.name}">
      <a href="/#/city/${restaurant.city.toLowerCase()}" class="location">
        <i class="fas fa-map-marker-alt"></i>
        <span>${restaurant.city}</span>
      </a>
    </div>
    <div class="content">
      <a href="/#/detail/${restaurant.id}">
        <h2 class="h4">${restaurant.name}</h2>
      </a>
      <p>${limitText(config.limit_card, restaurant.description)}</p>
    </div>
  </div>
  `

const restaurantLoading = () => `
  <div class="card">
    <div class="image">
      <loading-shine full></loading-shine>
    </div>
    <div class="content">
      <loading-shine height="2" width="80%" mb="10px"></loading-shine>
      <loading-shine height="1" width="90%" mb="4px"></loading-shine>
      <loading-shine height="1" width="100%" mb="4px"></loading-shine>
      <loading-shine height="1" width="50%" mb="4px"></loading-shine>
    </div>
  </div>
  `

export { createRestaurantItem, restaurantLoading }
