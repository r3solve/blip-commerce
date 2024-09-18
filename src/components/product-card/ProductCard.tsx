import { ProductItem } from "../../components/products/Products";
import { RiStarSFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Store from "../../store/Store";
import { Link } from "react-router-dom";
const ProductCard = ({ products }: { products: ProductItem[] }) => {
  const { cartArray, addToCart, removeFromCart } = Store();
  const handleAddToCart = (cart: ProductItem) => {
    const itemExist = cartArray.find((item) => item.id === cart.id);
    if (!itemExist) {
      addToCart(cart);
    }
  };

  return (
    <>
      {products.map((product: ProductItem) => (
        <div className="rounded-sm transition-all hover:scale-110 duration-150 hover:cursor-pointer  p-4 shadow-md lg:w-[240px] max-w-full lg:max-w-[250px]  ">
          <img
            src={product.image}
            alt="product"
            className="w-32 mx-auto rounded-lg h-28"
          />
          <div className="space-y-2 pt-1 p-4">
            <h3 className="text-base my-2 font-normal first-letter:uppercase  h-14">
              {product.title}
            </h3>

            <div className=" flex text-lg flex-col  justify-between items-start">
              <p className="font-light text-lg my-2">
                <span className="font-light">GHS</span>
                {product.price}.00{" "}
              </p>
              {!cartArray.find((item) => item.id === product.id) ? (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="my-1 w-full hover:bg-red-200 bg-red-500 mx-2 text-white flex items-center p-2 rounded-sm justify-center"
                >
                  <AiOutlineShoppingCart className="mr-2" /> Add
                </button>
              ) : (
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="my-1 flex items-center p-2 rounded-md justify-center"
                >
                  <AiOutlineShoppingCart className="mr-2" /> Remove
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
