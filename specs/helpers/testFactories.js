/* eslint-disable import/prefer-default-export */
import LikeButton from '../../src/scripts/utils/like-button'
import FavoriteRestaurantIdb from '../../src/scripts/data/favoriterestaurant-idb'

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButton.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  })
}

export { createLikeButtonPresenterWithRestaurant }
