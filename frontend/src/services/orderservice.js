import sendRequest from './sendRequest';

const BASE_URL = '/api/orders';

export async function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}