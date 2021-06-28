import config from './config'

const apiEndpoint = {
  list: `${config.base_url}list`,
  detail: (id) => `${config.base_url}detail/${id}`,
}

export default apiEndpoint
