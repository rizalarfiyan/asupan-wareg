const assert = require('assert')

Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#statusFavorite')
  I.see('Oppss.. Tidak ada data restoran favorit', '.message-data')
})

Scenario('liking one restaurant', async ({ I }) => {
  I.seeElement('#statusFavorite')
  I.see('Oppss.. Tidak ada data restoran favorit', '.message-data')

  I.amOnPage('/')
  I.seeElement('.card .content a')

  const firstRestaurant = locate('.card .content a').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.scrollPageToTop()
  I.seeElement('#likeButtonContainer button')
  I.click('#likeButtonContainer button')

  I.amOnPage('/#/favorite')

  I.seeElement('#statusFavorite')
  I.see('Menampilakan restoran favorit', '.message-data')
  I.seeElement('.card')

  const likedRestaurantTitle = await I.grabTextFrom('.card .content a')
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)
})

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('#statusFavorite')
  I.see('Oppss.. Tidak ada data restoran favorit', '.message-data')

  I.amOnPage('/')
  I.seeElement('.card .content a')

  const firstRestaurant = locate('.card .content a').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.scrollPageToTop()
  I.seeElement('#likeButtonContainer button')
  I.click('#likeButtonContainer button')

  I.amOnPage('/#/favorite')
  I.seeElement('#statusFavorite')
  I.see('Menampilakan restoran favorit', '.message-data')
  I.seeElement('.card')

  const likedRestaurantTitle = await I.grabTextFrom('.card .content a')
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)

  I.seeElement('.card .content a')
  I.click(locate('.card .content a').first())
  I.scrollPageToTop()
  I.seeElement('#likeButtonContainer button')
  I.click('#likeButtonContainer button')

  I.amOnPage('/#/favorite')
  I.seeElement('#statusFavorite')
  I.see('Oppss.. Tidak ada data restoran favorit', '.message-data')
})

Scenario('Add a review restaurant', async ({ I }) => {
  I.amOnPage('/')
  I.seeElement('.card .content a')

  I.click(locate('.card .content a').first())
  I.scrollPageToTop()

  I.seeElement('#submitButton')
  I.seeElement('#reviewForm')
  I.fillField('#review-name', 'Anonymous')
  I.fillField('#review-content', 'Makanannya lezad!')
  I.click('#submitButton')

  I.seeElement('#loadingReview')
  I.seeElement('#reviewStatus')
  I.see('Berhasil terkirim!')
})
