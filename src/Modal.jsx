/* eslint-disable react/prop-types */
import orderSuccessIcon from "../public/assets/images/icon-order-confirmed.svg";
import OrderSuccessItemCard from "./OrderSuccessItemCard";

const Modal = ({ cartItems, setCartItems, setShowModal }) => {
  // CALCULATE TOTAL ORDER COST OF ALL CART ITEMS
  const orderTotal = cartItems.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.price * currentProduct.number;
  }, 0);

  return (
    <div className="bg-rose-50 rounded-lg p-5 w-[95vw] md:w-[500px] font-red-hat-text">
      <img src={orderSuccessIcon} alt="success icon" className="mb-3" />
      <>
        <h2 className="text-3xl font-bold leading-10">Order Confirmed</h2>
        <p className="text-xs text-rose-400 tracking-wide">
          We hope you enjoy your food!
        </p>
      </>

      <div className="my-5 bg-rose-100 p-4 rounded-lg">
        {cartItems.map((cartItem) => {
          const { name, price, number, image } = cartItem;
          return (
            <OrderSuccessItemCard
              key={name}
              productName={name}
              productQuantity={number}
              productPrice={price}
              productThumbnail={image.thumbnail}
            />
          );
        })}

        {/* ORDER TOTAL */}
        <div className="flex flex-row flex-nowrap justify-between items-center pt-4">
          <p className="text-sm text-rose-500 tracking-normal font-medium">
            Order Total
          </p>
          <h3 className="text-rose-900 text-2xl font-bold">
            ${orderTotal.toFixed(2)}
          </h3>
        </div>
      </div>

      <button
        onClick={() => {
          setCartItems([]);
          setShowModal(false);
        }}
        className="w-full bg-rose-600 hover:bg-rose-800 text-rose-50 font-medium font-red-hat-text rounded-3xl py-3 mt-2">
        Start New Order
      </button>
    </div>
  );
};

export default Modal;
