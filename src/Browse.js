import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Browse = () => {
  const [catalog, setCatalog] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/fishlist.json");
        const data = await response.json();
        setCatalog(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setCartTotal(total);
  }, [cart]);

  const addToCart = (el) => {
    setCart((prevCart) => [...prevCart, el]);
  };

  const removeFromCart = (el) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== el.id);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const howManyofThis = (id) => {
    return cart.filter((cartItem) => cartItem.id === id).length;
  };

  const cartItems = cart.map((el, index) => (
    <div key={index}>
      <img className="img-fluid" src={el.image} width={150} alt={el.title} />
      {el.title} ${el.price} x {howManyofThis(el.id)}
    </div>
  ));

  const listItems = catalog.map((el) => (
    <div className="col-md-4 mb-4" key={el.id}>
      <div className="card">
        <img src={el.image} className="card-img-top" alt={el.title} />
        <div className="card-body">
          <h5 className="card-title">{el.title}</h5>
          <p className="card-text">{el.description}</p>
          <p className="card-text"><strong>${el.price}</strong></p>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-danger"
              onClick={() => removeFromCart(el)}
              disabled={howManyofThis(el.id) === 0}
            >
              -
            </button>
            <button className="btn btn-success" onClick={() => addToCart(el)}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <h2 className="my-4">Browse Products</h2>
      <div className="row">{listItems}</div>
      <div className="card mt-4">
        <div className="card-header">
          <h4>Shopping Cart</h4>
        </div>
        <div className="card-body">
          <div>{cartItems.length > 0 ? cartItems : <p>Your cart is empty</p>}</div>
          <div className="text-end">
            <strong>Total: ${cartTotal.toFixed(2)}</strong>
          </div>
          <div className="text-end mt-2">
            <button className="btn btn-warning" onClick={clearCart}>
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
