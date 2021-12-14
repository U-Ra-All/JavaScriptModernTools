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

// console.log(cart);

// // const result = await fetch('https://jsonplaceholder.typicode.com/posts');
// // const data = await result.json();
// // console.log(data);
// // console.log('Код после await');

// const getLastPost = async function () {
//   const result = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await result.json();
//   console.log(data);

//   return { title: data.at(-1).title, postText: data.at(-1).body };
// };

// const lastPostData = getLastPost();
// console.log(lastPostData);
// lastPostData.then(data => console.log(data));

// const lastPostData1 = await getLastPost();
// console.log(lastPostData1);

///////////////////////////////////////////////
// Шаблон Проектирования Модуль

// const ShoppingCart1 = (function () {
//   const cart = [];
//   const shippingCost = 20;
//   const totalPrice = 300;
//   const totalQuantity = 10;
//   const addProductToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${product} в количестве ${quantity} шт добавлено в корзину, цена доставки ${shippingCost}`
//     );
//   };

//   const productOrderedMessage = function (product, quantity) {
//     console.log(`${product} в количестве ${quantity} шт заказан`);
//   };

//   return {
//     addProductToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart1.addProductToCart('апельсин', 5);
// ShoppingCart1.addProductToCart('кола', 1);
// console.log(ShoppingCart1);

///////////////////////////////////////////////
// Модули CommonJS

// Экспорт чего-либо
// export.addProductToCart = function (product, quantity) {
//       cart.push({ product, quantity });
//       console.log(
//         `${product} в количестве ${quantity} шт добавлено в корзину, цена доставки ${shippingCost}`
//       );
//     };

// // Импорт
// const { addProductToCart } = require('./shopping-cart.js');

////////////////////////////////////////////////
// Использование библиотеки lodash-es
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// import cloneDeep from 'lodash';

// const state = {
//   cart: [
//     { product: 'яблоко', quantity: 5 },
//     { product: 'апельсин', quantity: 3 },
//   ],
//   user: { loggedIn: true },
// };
// const stateCopy = Object.assign({}, state);
// const stateDeepCopy = cloneDeep(state);
// state.user.loggedIn = false;
// console.log(stateCopy);
// console.log(stateDeepCopy);

// if (module.hot) {
//   module.hot.accept();
// }

// Promise.resolve('Testing').then(a => console.log(a));

// import 'core-js/stable';

// // Полифиллинг асинхронных функций
// import 'regenerator-runtime/runtime';
