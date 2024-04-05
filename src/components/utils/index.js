/**
 * This function calculates total price of cart shopping
 * @param {Array} products cartProducts: Array of Objects
 * @returns {number} Total price
 */
export const totalPrice = (products) => {
  let finalPrice = products.reduce((sum, product) => sum + product.price, 0);
  
  return finalPrice;
}