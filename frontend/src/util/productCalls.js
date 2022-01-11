export function getProduct(productList, productId) {
  const product = productList.find((item) => {
    return item._id === productId;
  });
  return { product: product };
}
