/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb'
import * as TestFactories from './helpers/testFactories'

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>'
}

describe('Liking A Restaurant', () => {
  beforeEach(() => {
    addLikeButtonContainer()
  })

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
    expect(
      document.querySelector('[aria-label="suka restoran ini"]')
    ).toBeTruthy()
  })

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
    expect(
      document.querySelector('[aria-label="tidak suka restoran ini"]')
    ).toBeFalsy()
  })

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1)
    expect(restaurant).toEqual({ id: 1 })
    FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 })
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }])
    FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({})
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])
  })

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
    await FavoriteRestaurantIdb.deleteRestaurant(1)

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])
  })
})
