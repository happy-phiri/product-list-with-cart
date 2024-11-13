/* eslint-disable react/prop-types */
import removeFromCartIcon from "../public/assets/images/icon-remove-item.svg";
const CartItemCard = ({
  productName,
  productQuantity,
  productPrice,
  removeProductFromCart,
}) => {
  const total = productQuantity * productPrice;

  return (
    <div className="flex flex-row flex-nowrap justify-between items-center border-b border-rose-100 pb-4">
      <div className="font-red-hat-text">
        <p className="text-rose-900 text-sm font-semibold leading-6">
          {productName}
        </p>
        <p className="flex flex-row flex-nowrap gap-3 text-sm">
          <span className="text-red font-medium">{productQuantity}x</span>
          <span className="text-rose-400">@${productPrice.toFixed(2)}</span>
          <span className="text-rose-500">${total.toFixed(2)}</span>
        </p>
      </div>
      <button
        onClick={() => removeProductFromCart(productName)}
        className="w-[20px] h-[20px] rounded-full border border-rose-300 grid place-content-center hover:border-rose-900">
        <img
          src={removeFromCartIcon}
          alt="close icon"
          className="hover:text-rose-900"
        />
      </button>
    </div>
  );
};

export default CartItemCard;
