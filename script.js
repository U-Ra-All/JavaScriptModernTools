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

// const result = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await result.json();
// console.log(data);
// console.log('Код после await');

const getLastPost = async function () {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await result.json();
  console.log(data);

  return { title: data.at(-1).title, postText: data.at(-1).body };
};

const lastPostData = getLastPost();
console.log(lastPostData);
lastPostData.then(data => console.log(data));

const lastPostData1 = await getLastPost();
console.log(lastPostData1);
