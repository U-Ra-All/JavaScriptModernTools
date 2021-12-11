// Экспорт модуля
console.log('Экспорт модуля');

const shippingCost = 20;
export const cart = [];

export const addProductToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} в количестве ${quantity} шт добавлено в корзину`);
};

const totalPrice = 300;
const totalQuantity = 7;

export { totalPrice, totalQuantity as quantity };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} в количестве ${quantity} шт добавлено в корзину`);
}
