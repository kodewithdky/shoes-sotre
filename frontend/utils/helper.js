export const getDiscountedPricePercentage = (originalPrice, dicountedPrice) => {
  const discount = originalPrice - dicountedPrice;

  const discountPercentage = (discount / originalPrice) * 100;
  return discountPercentage.toFixed(2);
};
