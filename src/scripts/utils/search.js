const Search = {
  init({ searchForm }) {
    searchForm.addEventListener('submit', async (event) => {
      event.preventDefault()
      const formData = Object.fromEntries(new FormData(searchForm).entries())
      const search = encodeURIComponent(formData.search)
      window.location.href = `/#/search?q=${search}`
    })
  },
}

export default Search
