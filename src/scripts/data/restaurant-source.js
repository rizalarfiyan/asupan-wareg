import apiEndpoint from '../globals/api-endpoint'

class restaurantSource {
  static async getList() {
    const response = await fetch(apiEndpoint.list)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async getDetail(id) {
    const response = await fetch(apiEndpoint.detail(id))
    const responseJson = await response.json()
    return responseJson.restaurant
  }
}

export default restaurantSource
