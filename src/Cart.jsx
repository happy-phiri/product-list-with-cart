/* eslint-disable react/prop-types */
import emptyCartIcon from "../public/assets/images/illustration-empty-cart.svg";
import carbonNeutralIcon from "../public/assets/images/icon-carbon-neutral.svg";
import CartItemCard from "./CartItemCard";

const Cart = ({ cartItems, removeProductFromCart, setShowModal }) => {
  // CALCULATE TOTAL ORDER COST OF ALL CART ITEMS
  const orderTotal = cartItems.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.price * currentProduct.number;
  }, 0);

  //   GET TOTAL NUMBER OF ITEMS IN CART
  const totalCartItems = cartItems.length;

  return (
    <div className="bg-rose-50 rounded-lg px-4 py-6 font-red-hat-text tracking-wide">
      {cartItems.length === 0 ? (
        <div>
          <h2 className="text-2xl font-bold text-red">
            Your Cart ({totalCartItems})
          </h2>
          <div className="grid place-content-center w-full my-5">
            <img
              src={emptyCartIcon}
              alt="empty cart illustration"
              className="mx-auto"
            />
            <p className="text-rose-400 text-sm tracking-normal">
              Your added items will appear here
            </p>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold text-red mb-4">
            Your Cart ({totalCartItems})
          </h2>
          <div className="flex flex-col flex-nowrap gap-4">
            {cartItems.map((item) => {
              return (
                <CartItemCard
                  key={item.name}
                  productName={item.name}
                  productQuantity={item.number}
                  productPrice={item.price}
                  removeProductFromCart={removeProductFromCart}
                />
              );
            })}

            {/* ORDER TOTAL */}
            <div className="flex flex-row flex-nowrap justify-between items-center py-4">
              <p className="text-sm text-rose-500 tracking-normal font-medium">
                Order Total
              </p>
              <h3 className="text-rose-900 text-2xl font-bold">
                ${orderTotal.toFixed(2)}
              </h3>
            </div>

            {/* CARBON NEUTRAL */}
            <div className="flex flex-row flex-nowrap justify-center items-center gap-2 py-4 rounded-lg bg-rose-100">
              <img
                src={carbonNeutralIcon}
                alt="carbon neutral icon tracking-normal"
              />
              <p className="text-sm text-rose-900">
                This is a <span className="font-semibold">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>

            {/* CONFIRM ORDER BUTTON */}
            <button
              onClick={() => setShowModal(true)}
              className="w-full bg-rose-700 hover:bg-rose-800 text-rose-50 font-medium font-red-hat-text rounded-3xl py-3 mt-2">
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
