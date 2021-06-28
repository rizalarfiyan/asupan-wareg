import config from '../../globals/config'
import { getInitial } from '../../globals/helpers'

const descriptionRestaurant = (desc) => `
  <div class="content-description">
    <h1 class="h2">${desc.name}</h1>
    <div class="content-data">
      <div class="categories">
        <i class="fas fa-utensils"></i>
        <span>
          ${desc.categories.map((category) => category.name).join(', ')}
        </span>
      </div>
      <div class="location">
        <i class="fas fa-map-marker-alt"></i>
        <span>${desc.address}, ${desc.city}</span>
      </div>
    </div>
    <p class="description">${desc.description}</p>
  </div>`

const elementMenu = (menu) => `<div class="menu-item">${menu.name}</div>`

const menuRestaurant = (menus) => `
  <div class="list-menu">
    <div class="title">
      <h2 class="h3">Daftar Menu</h2>
    </div>
    <div class="menu-wrap">
      <div class="menu-group">
        <div class="menu-item">
          <i class="fas fa-hamburger"></i>
          <h3 class="h4">Makanan</h3>
        </div>
        ${menus.foods.map((menu) => elementMenu(menu)).join(' ')}
      </div>
      <div class="menu-group">
        <div class="menu-item">
          <i class="fas fa-mug-hot"></i>
          <h3 class="h4">Minuman</h3>
        </div>
        ${menus.drinks.map((menu) => elementMenu(menu)).join(' ')}
      </div>
    </div>
  </div>`

const reviewsElement = (review) => `
  <div class="review">
    <div class="initial">
      <span>${getInitial(review.name)}</span>
    </div>
    <div class="data-review">
      <div class="top">
        <h4 class="h5">${review.name}</h4>
        <span>
          <i class="fas fa-calendar-alt"></i>
          <span>${review.date}</span>
        </span>
      </div>
      <p>${review.review}</p>
    </div>
  </div>`

const reviewsContainer = (reviews) => `
  <div class="review-content">
    <div class="title has-sub">
      <h2 class="h3">Ulasan semua orang</h2>
      <p>Terdapat ${reviews.length} ulasan</p>
    </div>
    <div class="reviews">
      ${reviews.map((elem) => reviewsElement(elem)).join(' ')}
    </div>
  </div>`

const reviewsForms = () => `
  <div class="review-form">
    <div class="title">
      <h2 class="h3">Bagaimana menurut anda?</h2>
    </div>
    <form action="">
      <div class="form-group">
          <label for="review-name">Name</label><br>
          <input id="review-name" type="text" name="name" title="Masukkan nama anda" placeholder="Nama anda" required="">
      </div>
      <div class="form-group">
          <label for="review-content">Review</label><br>
          <textarea id="review-content" name="text-review" placeholder="Masukkan review anda di sini" title="Masukkan review anda" required=""></textarea>
      </div>
      <button type="submit">
        <i class="fas fa-paper-plane"></i>
        <span>
          Kirim Review
        </span>
      </button>
    </form>
  </div>`

const createDetailPage = (restaurant) => `
  <hr />
  <div class="image-post">
    <img class="cover" src="${
      restaurant.pictureId
        ? config.base_image_url + restaurant.pictureId
        : 'https://picsum.photos/id/666/800/450?grayscale'
    }" alt="${restaurant.name}">
    <div class="rating large">
      <span>${restaurant.rating}</span>
    </div>
  </div>
  <div class="content-wrap">
    ${descriptionRestaurant(restaurant)}
    <div class="content-bottom">
      ${menuRestaurant(restaurant.menus)}
      <div class="review-wrap">
        ${reviewsContainer(restaurant.customerReviews)}
        ${reviewsForms()}
      </div>
    </div>
  </div>`

export default createDetailPage
