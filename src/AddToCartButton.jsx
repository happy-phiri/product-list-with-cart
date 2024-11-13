/* eslint-disable react/prop-types */
import cartIcon from "../public/assets/images/icon-add-to-cart.svg";

const AddToCartButton = ({ handleAddProductToCart, product }) => {
  return (
    <button
      onClick={() => handleAddProductToCart(product)}
      className="border border-rose-500 tracking-wide font-red-hat-text font-medium text-rose-900 hover:text-red hover:border-red w-[60%] py-3 rounded-3xl flex flex-row flex-nowrap gap-3 justify-center bg-rose-50 absolute bottom-[-20px] right-0 left-0 mx-auto">
      <img src={cartIcon} alt="cart icon" />{" "}
      <span className="">Add to Cart</span>
    </button>
  );
};

export default AddToCartButton;
