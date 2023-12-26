import { productInterface } from "../models/products";
import { faker } from "@faker-js/faker";

export const getProducts = (count: number): productInterface[] => {
  const products: productInterface[] = [];

  for (let i = 0; i < count; count++) {
    const singleProdData: productInterface = {
      id: faker.string.uuid(),
      productName: faker.commerce.productName(),
      productImg: faker.image.urlPicsumPhotos({ width: 320, height: 480 }), // defined aspect ratio
      rating: faker.number.int({ min: 0, max: 5 }),
      newPrice: parseFloat(faker.commerce.price()),
      oldPrice: parseFloat(faker.commerce.price()),
    };
    products.push(singleProdData);
  }

  return products;
};

export const getPopularSuggestion = (count: number): string[] => {
  const suggestions: string[] = [];
  for (let i = 0; i < count; count++) {
    const productName: string = faker.commerce.productName();
    suggestions.push(productName);
  }

  return suggestions;
};
