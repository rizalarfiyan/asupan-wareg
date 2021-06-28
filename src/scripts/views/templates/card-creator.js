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
      <a href="#" class="location">
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

export default createRestaurantItem
