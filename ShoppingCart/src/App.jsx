import useProducts from "./hooks/useProducts";
import "./App.css";
import { useContext } from "react";
import cartContext from "./components/context";
import { NavLink } from "react-router-dom";

const App = () => {
  const { isPending, isError, data, error } = useProducts();

  const { dispatch } = useContext(cartContext);

  // console.log(state.cart);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  if (isPending) {
    return <h3>Loading...⁉️</h3>;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }
  return (
    <>
      <NavLink to="/cart">Cart</NavLink>
      <div className="container">
        {data.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;