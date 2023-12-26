import { heart, heartFilled } from "../../constants/imageUrl";
import { productInterface } from "../../models/products";
import { useProductStore } from "../../store/productStore";
import Rating from "../Rating";

interface Props {
  product: productInterface;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { wishlist, wishlistHandler } = useProductStore((state) => ({
    wishlist: state.wishlist,
    wishlistHandler: state.wishlistHandler,
  }));
  return (
    // <div>
    <div className="flex flex-col">
      <div className="relative group cursor-pointer">
        <img src={product.productImg} className="object-contain" />
        <img
          onClick={() => wishlistHandler(product)}
          src={wishlist[product.id] ? heartFilled : heart}
          className="w-6 aspect-square absolute right-4 top-4 cursor-pointer"
        />
        <div className=" group-hover:block hidden py-4 bg-[#6D84FFB5] absolute bottom-0 right-0 left-0 text-center text-white">
          View Product
        </div>
      </div>
      <div className=" flex flex-col gap-2 mt-4">
        <h1 className=" text-sm font-medium">{product.productName}</h1>
        <h1 className=" text-sm font-medium">
          <span className="mr-2 text-black/40 line-through">
            Rs.{product.oldPrice}
          </span>
          <span className=" text-[#6D84FF]">Rs.{product.newPrice}</span>
        </h1>
        <Rating score={product.rating} rateCount={product.rateCount} />
      </div>
    </div>
    // </div>
  );
};

export default ProductCard;
