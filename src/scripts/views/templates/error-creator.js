const resultText = (message) => `
  <div class="result-text">
    <h1 class="h3">${message}</h1>
  </div>`

const errorText = (message) => `
  <div class="result-text result-error">
    <i class="fas fa-exclamation-triangle"></i>
    <h2 class="h3">${message}</h2>
  </div>`

export { resultText, errorText }
