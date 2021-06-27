import apiEndpoint from '../globals/api-endpoint'

class restaurantSource {
  static async getList() {
    const response = await fetch(apiEndpoint.list)
    const responseJson = await response.json()
    return responseJson.restaurants
  }
}

export default restaurantSource
