/* eslint-disable react/prop-types */
import plusIcon from "../public/assets/images/icon-increment-quantity.svg";
import minusIcon from "../public/assets/images/icon-decrement-quantity.svg";

const QuantityButton = ({
  product,
  cartItems,
  addQuantity,
  subtractQuantity,
  productName,
}) => {
  const inCart = cartItems.find((cartItem) => cartItem.name === product.name);

  return (
    <div className="border border-red bg-red tracking-wide font-red-hat-text font-medium text-rose-900 w-[60%] p-3 rounded-3xl flex flex-row flex-nowrap gap-3 justify-between items-center absolute bottom-[-20px] right-0 left-0 mx-auto">
      <button
        onClick={() => subtractQuantity(productName)}
        className="w-[22px] h-[22px] rounded-full border border-rose-50 text-rose-50 grid place-content-center">
        <img src={minusIcon} alt="decrement icon" className="object-contain" />
      </button>
      <span className="text-rose-50 font-red-hat-text">{inCart.number}</span>
      <button
        onClick={() => addQuantity(productName)}
        className="w-[22px] h-[22px] rounded-full border border-rose-50 text-rose-50 grid place-content-center">
        <img src={plusIcon} alt="increment icon" className="object-contain" />
      </button>
    </div>
  );
};

export default QuantityButton;
