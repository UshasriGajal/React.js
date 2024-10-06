import React, { useContext } from "react";
import cartContext from "./context";
import "../App.css";

const Cart = () => {
  const { state, dispatch } = useContext(cartContext);
  return (
    <div className="cart-container">
      <button>Clear Cart</button>
      {state.cart.length > 0 ? (
        <>
          {state.cart.map((item) => (
            <div className="cart-item" key={Math.random()}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <p>💲{item.price}</p>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                }
              >
                Remove
              </button>
            </div>
          ))}
        </>
      ) : (
        <h2 className="empty-cart-message">
          Oopss! Please add something to cart
        </h2>
      )}
    </div>
  );
};

export default Cart;