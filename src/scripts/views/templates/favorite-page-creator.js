const avaliableFavorite = () => `
  <div class="result-text">
    <h1 class="h3">Menampilkan restoran favorit</h1>
  </div>`

const unavaliableFavorite = () => `
  <div class="result-text result-error">
    <i class="fas fa-exclamation-triangle"></i>
    <h2 class="h3">Opps.. Anda tidak punya restoran favorit</h2>
  </div>`

export { avaliableFavorite, unavaliableFavorite }