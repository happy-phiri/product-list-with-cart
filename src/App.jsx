import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import Modal from "./Modal";

function App() {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // FETCHING DESSERTS FROM DATA.JSON
  useEffect(() => {
    fetch("/public/data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  // ADD PRODUCT TO CART
  const handleAddProductToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.name === item.name
    );

    if (!existingItem) {
      setCartItems((prevState) => {
        return [{ ...item, number: 1 }, ...prevState];
      });
      console.log(cartItems);
    }
  };

  // ADDS QUANTITY TO SPECIFIC PRODUCT IN CART
  const addQuantity = (productName) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.name === productName
          ? { ...item, number: Number(item.number + 1) }
          : item
      )
    );
  };

  // ADDS QUANTITY TO SPECIFIC PRODUCT IN CART
  const subtractQuantity = (productName) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((item) =>
          item.name === productName
            ? { ...item, number: Number(item.number - 1) }
            : item
        )
        .filter((cartItem) => cartItem.number > 0)
    );
  };

  // REMOVE ITEM FROM CART
  const removeProductFromCart = (productName) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((item) => item.name !== productName);
    });
  };

  return (
    <main className=" bg-rose-100 min-h-[100vh] border relative max-lg:px-4 max-desktop:px-2">
      <div className="max-w-screen-desktop mx-auto my-14">
        <div className="grid lg:grid-cols-7 gap-7">
          <section className="lg:col-span-5">
            <h1 className="text-4xl font-red-hat-text mb-6 font-bold tracking-wide">
              Desserts
            </h1>
            {data ? (
              <div className="grid md:grid-cols-3 gap-7">
                {data.map((item) => {
                  return (
                    <ProductCard
                      key={item.name}
                      product={item}
                      handleAddProductToCart={handleAddProductToCart}
                      cartItems={cartItems}
                      addQuantity={addQuantity}
                      subtractQuantity={subtractQuantity}
                    />
                  );
                })}
              </div>
            ) : (
              <h1 className="text-7xl">Loading . . .</h1>
            )}
          </section>
          <aside className="lg:col-span-2">
            <Cart
              cartItems={cartItems}
              removeProductFromCart={removeProductFromCart}
              setShowModal={setShowModal}
            />
          </aside>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full min-h-[100vh] bg-[rgba(0,0,0,0.6)] z-20 grid place-content-center">
          <Modal
            cartItems={cartItems}
            setCartItems={setCartItems}
            setShowModal={setShowModal}
          />
        </div>
      )}
    </main>
  );
}

export default App;
