// Импорт модуля
// import {
//   addProductToCart,
//   totalPrice as price,
//   quantity,
// } from './shopping-cart.js';

// // console.log(shippingCost);

// addProductToCart('рубашка', 2);
// console.log(price, quantity);

// import * as ShoppingCart from './shopping-cart.js';

// console.log('Импорт модуля');

// ShoppingCart.addProductToCart('рубашка', 2);
// console.log(ShoppingCart.totalPrice);

// import addToCart, {
//   addProductToCart,
//   totalPrice as price,
//   quantity,
// } from './shopping-cart.js';

import addToCart, { cart } from './shopping-cart.js';

addToCart('рубашка', 2);
addToCart('носки', 2);
addToCart('трусы', 2);

console.log(cart);
