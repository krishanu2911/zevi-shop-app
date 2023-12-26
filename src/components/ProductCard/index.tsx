import { heart, heartFilled } from "../../constants/imageUrl";
import { productInterface } from "../../models/products";
import { useProductStore } from "../../store/productStore";

interface Props {
  product: productInterface;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { wishlist, wishlistHandler } = useProductStore((state) => ({
    wishlist: state.wishlist,
    wishlistHandler: state.wishlistHandler,
  }));
  return (
    <div>
      <div className="flex flex-col">
        <div className="relative">
          <img src={product.productImg} className="object-contain" />
          <img
            onClick={() => wishlistHandler(product)}
            src={wishlist[product.id] ? heartFilled : heart}
            className="w-6 aspect-square absolute right-4 top-4 cursor-pointer"
          />
        </div>
        <h1>{product.productName}</h1>
      </div>
    </div>
  );
};

export default ProductCard;
