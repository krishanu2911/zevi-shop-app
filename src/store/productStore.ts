import { create } from "zustand";
import { productInterface } from "../models/products";

export interface ProductStoreInterface {
  products: productInterface[];
  wishlist: { [key: string]: productInterface };
  setProducts: (products: productInterface[]) => void;
  wishlistHandler: (product: productInterface) => void;
  priceFilterRange: number[] | undefined;
  setPriceFilterRange: (data?: number[]) => void;
  ratingFilter: number | undefined;
  setRatingFilter: (data?: number) => void;
}

export const useProductStore = create<ProductStoreInterface>((set, get) => ({
  products: [],
  wishlist: {},
  priceFilterRange: undefined,
  ratingFilter: undefined,
  setRatingFilter: (rating: number | undefined) => {
    set((state) => ({
      ...state,
      ratingFilter: rating,
    }));
  },
  setPriceFilterRange: (range: number[] | undefined) => {
    set((state) => ({
      ...state,
      priceFilterRange: range,
    }));
  },
  setProducts: (prods: productInterface[]) => {
    set((state) => ({
      ...state,
      products: prods,
    }));
  },
  wishlistHandler: (product: productInterface) => {
    const { wishlist } = get();
    const updatedWishList = { ...wishlist };
    if (wishlist[product.id] !== undefined) {
      delete updatedWishList[product.id];
    } else {
      updatedWishList[product.id] = product;
    }

    set((state) => ({
      ...state,
      wishlist: updatedWishList,
    }));
  },
}));
