const mynes = document.querySelector('.mynes');
const plus = document.querySelector('.plus');
const number = document.querySelector('.number');

/* PURCHASE-BUTTON */
let counter = 0;

plus.onclick = function () {
  counter++;
  number.innerHTML = counter;
};

mynes.onclick = function () {
  if (counter > 0) {
    counter--;
    number.innerHTML = counter;
  }
};

/* CHANGING-IMAGES */

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const product = document.querySelector('.product');
const allProductsActive = document.querySelector('.all-products-active');
const productCloser = document.querySelector('.product-closer');

const product1 = document.querySelector('.product1');
const product2 = document.querySelector('.product2');
const product3 = document.querySelector('.product3');
const product4 = document.querySelector('.product4');

/*open/close - product*/

productCloser.onclick = function () {
  allProductsActive.style.display = 'none';
};

product.onclick = function () {
  if (window.innerWidth > 800) {
    allProductsActive.style.display = 'flex';
  }
};

const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');
const d = document.querySelector('.d');

const thumb1 = document.querySelector('.thumb1');
const thumb2 = document.querySelector('.thumb2');
const thumb3 = document.querySelector('.thumb3');
const thumb4 = document.querySelector('.thumb4');

thumb1.onclick = function () {
  product1.style.display = 'flex';
  product2.style.display = 'none';
  product3.style.display = 'none';
  product4.style.display = 'none';

  a.classList.add('active');
  b.classList.remove('active');
  c.classList.remove('active');
  d.classList.remove('active');
};

thumb2.onclick = function () {
  product1.style.display = 'none';
  product2.style.display = 'flex';
  product3.style.display = 'none';
  product4.style.display = 'none';

  a.classList.remove('active');
  b.classList.add('active');
  c.classList.remove('active');
  d.classList.remove('active');
};

thumb3.onclick = function () {
  product1.style.display = 'none';
  product2.style.display = 'none';
  product3.style.display = 'flex';
  product4.style.display = 'none';

  a.classList.remove('active');
  b.classList.remove('active');
  c.classList.add('active');
  d.classList.remove('active');
};

thumb4.onclick = function () {
  product1.style.display = 'none';
  product2.style.display = 'none';
  product3.style.display = 'none';
  product4.style.display = 'flex';

  a.classList.remove('active');
  b.classList.remove('active');
  c.classList.remove('active');
  d.classList.add('active');
};

const cartContent = document.querySelector('.cart-content');
const cart = document.querySelector('.cart');

cart.onclick = function () {
  cartContent.classList.toggle('open');
};
