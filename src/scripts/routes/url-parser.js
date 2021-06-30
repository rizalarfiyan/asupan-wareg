const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase()
    const splitedUrl = this._urlSplitter(url)
    return this._urlCombiner(splitedUrl)
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase()
    return this._urlSplitter(url)
  },

  // https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
  getQuery(name, url = window.location.href) {
    const search = name.replace(/[\\[\]]/g, '\\$&')
    const regex = new RegExp(`[?&]${search}(=([^&#]*)|&|#|$)`)
    const results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return results[2]
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/')
    return {
      resource: urlsSplits[1] ? this._getResource(urlsSplits[1]) : null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    }
  },

  _getResource(urlsSplits) {
    return urlsSplits.match(/[?\\/]/) ? urlsSplits.split('?')[0] : urlsSplits
  },

  _urlCombiner(splitedUrl) {
    return (
      (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') +
      (splitedUrl.id ? '/:id' : '') +
      (splitedUrl.verb ? `/${splitedUrl.verb}` : '')
    )
  },
}

export default UrlParser
