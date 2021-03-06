/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { openDB } from 'idb'
import config from '../globals/config'

const { db_name, db_version, db_key } = config

const dbPromise = openDB(db_name, db_version, {
  upgrade(database) {
    database.createObjectStore(db_key, { keyPath: 'id' })
  },
})

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    if (!id) {
      return
    }

    return (await dbPromise).get(db_key, id)
  },
  async getAllRestaurants() {
    return (await dbPromise).getAll(db_key)
  },
  async putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return
    }

    return (await dbPromise).put(db_key, restaurant)
  },
  async deleteRestaurant(id) {
    return (await dbPromise).delete(db_key, id)
  },
}

export default FavoriteRestaurantIdb
