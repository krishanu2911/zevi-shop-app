import { productInterface } from "../../models/products";

export const getFilteredProducts = (
  ratingFitler: number | undefined,
  priceFilterRange: number[] | undefined,
  products: productInterface[]
): productInterface[] => {
  const updatedProducts: productInterface[] = products.filter((prods) => {
    const checkRatingFilter = ratingFitler
      ? prods.rating >= ratingFitler
      : true;
    const checkPriceFilterRange = priceFilterRange
      ? prods.newPrice >= priceFilterRange[0] &&
        prods.newPrice <= priceFilterRange[1]
      : true;
    return checkRatingFilter && checkPriceFilterRange;
  });
  return updatedProducts;
};
