import apiEndpoint from '../globals/api-endpoint'

class restaurantSource {
  static async getList() {
    try {
      const response = await fetch(apiEndpoint.list)
      const responseJson = await response.json()
      return responseJson.restaurants
    } catch (err) {
      return false
    }
  }

  static async getDetail(id) {
    try {
      const response = await fetch(apiEndpoint.detail(id))
      const responseJson = await response.json()
      return responseJson.restaurant
    } catch (err) {
      return false
    }
  }

  static async sendReview(data) {
    try {
      const response = await fetch(apiEndpoint.review, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': '12345',
        },
        body: JSON.stringify(data),
      })
      return response.json()
    } catch (err) {
      return false
    }
  }
}

export default restaurantSource
