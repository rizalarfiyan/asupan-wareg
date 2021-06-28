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

  static async sendReview(data) {
    const response = await fetch(apiEndpoint.review, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
      },
      body: JSON.stringify(data),
    })
    return response.json()
  }
}

export default restaurantSource
