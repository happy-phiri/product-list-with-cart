/* eslint-disable react/prop-types */
import AddToCartButton from "./AddToCartButton";
import QuantityButton from "./QuantityButton";

const ProductCard = ({
  product,
  handleAddProductToCart,
  cartItems,
  handleAdd,
  addQuantity,
  subtractQuantity,
}) => {
  const inCart = cartItems.find((cartItem) => cartItem.name === product.name);

  const { name, image, category, price } = product;
  return (
    <div>
      <div className="relative">
        <img
          src={image.desktop}
          alt={name}
          className={`rounded-xl object-contain border-2 ${
            inCart ? "border-red" : "border-rose-100"
          }`}
        />
        {/* SHOW QUANTITYBUTTON IF INCART IS FOUND, OTHERWISE SHOW ADDTOCARTBUTTON */}
        {inCart ? (
          <QuantityButton
            handleAdd={handleAdd}
            product={product}
            cartItems={cartItems}
            addQuantity={addQuantity}
            subtractQuantity={subtractQuantity}
            productName={product.name}
          />
        ) : (
          <AddToCartButton
            handleAddProductToCart={handleAddProductToCart}
            product={product}
          />
        )}
      </div>
      <div className="mt-8 font-red-hat-text tracking-wide">
        <p className="text-rose-300">{category}</p>
        <h3 className="font-semibold text-rose-900">{name}</h3>
        <p className="font-semibold text-red tracking-wider">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
