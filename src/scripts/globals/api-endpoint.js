import config from './config'

const apiEndpoint = {
  list: `${config.base_url}list`,
  detail: (id) => `${config.base_url}detail/${id}`,
  review: `${config.base_url}review`,
  search: (search) => `${config.base_url}search?q=${search}`,
}

export default apiEndpoint
