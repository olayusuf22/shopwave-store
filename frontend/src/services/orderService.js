import sendRequest from './sendRequest';

const BASE_URL = '/api/orders';

export async function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export async function addToCart(productId) {
  return sendRequest(`${BASE_URL}/cart/products/${productId}`, 'PUT');
}

export async function removeFromCart(productId) {
  return sendRequest(`${BASE_URL}/cart/products/${productId}`, 'DELETE');
}

export async function checkOut() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'PUT');
}