import config from '../globals/config'

const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this._openCache()
    cache.addAll(requests)
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys()
    cacheNames
      .filter((name) => name !== config.cache_name)
      .map((filteredName) => caches.delete(filteredName))
  },

  async revalidateCache(request) {
    const response = await caches.match(request)

    if (response) {
      return response
    }
    return this._fetchRequest(request)
  },

  async _openCache() {
    return caches.open(config.cache_name)
  },

  async _fetchRequest(request) {
    try {
      const response = await fetch(request)
      if (!response || response.status !== 200) {
        return response
      }

      await this._addCache(request)
      return response
    } catch (err) {
      return request
    }
  },

  async _addCache(request) {
    const cache = await this._openCache()
    cache.add(request)
  },
}

export default CacheHelper
