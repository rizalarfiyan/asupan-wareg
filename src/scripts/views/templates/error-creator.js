const resultText = (message) => `
  <div class="result-text">
    <h1 class="h3 message-data">${message}</h1>
  </div>`

const errorText = (message) => `
  <div class="result-text result-error">
    <x-icon name="error" width="128" height="128"></x-icon>
    <h2 class="h3 message-data">${message}</h2>
  </div>`

export { resultText, errorText }
