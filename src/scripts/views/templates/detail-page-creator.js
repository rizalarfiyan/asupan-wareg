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
    <div class="reviews" id="reviewData">
      ${reviews
        .reverse()
        .map((elem) => reviewsElement(elem))
        .join(' ')}
    </div>
  </div>`

const reviewsForms = (restaurant) => `
  <div class="review-form">
    <div class="title">
      <h2 class="h3">Bagaimana menurut anda?</h2>
    </div>
    <form id="reviewForm" data-id="${restaurant.id}">
      <div class="form-group">
          <label for="review-name">Name</label><br>
          <input id="review-name" type="text" name="name" title="Masukkan nama anda" placeholder="Nama anda" required="">
      </div>
      <div class="form-group">
          <label for="review-content">Review</label><br>
          <textarea id="review-content" name="review" placeholder="Masukkan review anda di sini" title="Masukkan review anda" required=""></textarea>
      </div>
      <button type="submit">
        <i class="fas fa-paper-plane"></i>
        <span>
          Kirim Review
        </span>
      </button>
    </form>
  </div>`

const createLikeButtonTemplate = () => `
  <button aria-label="suka restoran ini" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>`

const createLikedButtonTemplate = () => `
  <button aria-label="tidak suka restoran ini" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>`

const createDetailPage = (restaurant) => `
  <div class="image-post">
    <img class="cover" src="${
      restaurant.pictureId
        ? config.base_image_url + restaurant.pictureId
        : 'https://picsum.photos/id/666/800/450?grayscale'
    }" alt="${restaurant.name}">
    <a href="#" class="rating large">
      <span>${restaurant.rating}</span>
    </a>
    <div id="likeButtonContainer">
      <button aria-label="like this movie" id="likeButton" class="like">
        <i class="fas fa-heart" aria-hidden="true"></i>
      </button>
    </div>
  </div>
  <div class="content-wrap">
    ${descriptionRestaurant(restaurant)}
    <div class="content-bottom">
      ${menuRestaurant(restaurant.menus)}
      <div class="review-wrap">
        ${reviewsContainer(restaurant.customerReviews)}
        ${reviewsForms(restaurant)}
      </div>
    </div>
  </div>`

const reviewsLoading = () => `
  <div class="review">
    <loading-shine height="80px" width="80px"></loading-shine>
    <div class="data-review">
      <div class="top">
        <loading-shine height="1" width="120px"></loading-shine>
        <loading-shine height="14px" width="80px"></loading-shine>
      </div>
      <loading-shine height="10px" width="90%" mb="4px"></loading-shine>
      <loading-shine height="10px" width="60%" mb="4px"></loading-shine>
      <loading-shine height="10px" width="80%" mb="4px"></loading-shine>
      <loading-shine height="10px" width="50%" mb="4px"></loading-shine>
    </div>
  </div>`

const detailLoading = () => `
  <hr />
  <div class="image-post" style="height:320px">
    <loading-shine full height="320px"></loading-shine>
  </div>
  <div class="content-wrap">
    <div class="content-description">
      <loading-shine height="3" width="50%"></loading-shine>
      <div class="content-data">
        <div class="categories">
          <loading-shine height="1" width="80px"></loading-shine>
        </div>
        <div class="location">
          <loading-shine height="1" width="160px"></loading-shine>
        </div>
      </div>
      <p class="description">
        <loading-shine height="1" width="90%" mb="4px"></loading-shine>
        <loading-shine height="1" width="60%" mb="4px"></loading-shine>
        <loading-shine height="1" width="80%" mb="4px"></loading-shine>
        <loading-shine height="1" width="50%" mb="4px"></loading-shine>
      </p>
    </div>
    <div class="content-bottom">
      <div class="list-menu">
        <div class="title">
          <loading-shine height="2" width="180px"></loading-shine>
        </div>
        <div class="menu-wrap">
          <div class="menu-group">
            <div class="menu-item">
              <loading-shine height="80px" width="90%" mb="6px"></loading-shine>
              <loading-shine height="1" width="90%"></loading-shine>
            </div>
            <div class="menu-item">
              <loading-shine height="1" width="100%"></loading-shine>
            </div>
          </div>
          <div class="menu-group">
            <div class="menu-item">
              <loading-shine height="80px" width="90%" mb="6px"></loading-shine>
              <loading-shine height="1" width="90%"></loading-shine>
            </div>
            <div class="menu-item">
              <loading-shine height="1" width="100%"></loading-shine>
            </div>
          </div>
        </div>
      </div>
      <div class="review-wrap">
        <div class="review-content">
          <div class="title has-sub">
            <loading-shine height="2" width="60%" mb="4px"></loading-shine>
            <loading-shine height="1" width="45%"></loading-shine>
          </div>
          <div class="reviews">
            ${Array.from(Array(config.long_review).keys())
              .map(() => reviewsLoading())
              .join(' ')}
          </div>
        </div>
        <div class="review-form">
          <div class="title">
            <loading-shine height="2" width="60%"></loading-shine>
            </div>
            <form id="reviewForm">
            <loading-shine height="1" width="80px" mb="4px"></loading-shine>
            <loading-shine height="2" width="100%" mb="10px"></loading-shine>
            <loading-shine height="1" width="120px" mb="4px"></loading-shine>
            <loading-shine height="120px" width="100%" mb="10px"></loading-shine>
            <loading-shine height="3" width="140px" style="margin:auto"></loading-shine>
          </form>
        </div>
      </div>
    </div>
  </div>`

export {
  createDetailPage,
  detailLoading,
  reviewsLoading,
  reviewsElement,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
}
