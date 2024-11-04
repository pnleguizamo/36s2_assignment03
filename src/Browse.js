import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";

const Browse = ({catalog, setCatalog, cart, setCart, cartTotal, setCartTotal}) => {
  // const [catalog, setCatalog] = useState([]);
  // const [cart, setCart] = useState([]);
  // const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/fishlist.json");
      const data = await response.json();
      setCatalog(data);
    };
    fetchData();
  }, []);

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let itemFound = false;
    const updatedCart = cart.filter((cartItem) => {
      if (cartItem.id === el.id && !itemFound) {
        itemFound = true;
        return false;
      }
      return true;
    });
    if (itemFound) {
      setCart(updatedCart);
    }
  };

  const cartItems = cart.map((el, index) => (
    <div key={index}>
      <img className="img-fluid" src={el.image} width={150} alt={el.title} />
      {el.title} ${el.price}
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
            <button className="btn btn-danger" onClick={() => removeFromCart(el)}>
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
          <div>{cartItems}</div>
          <div className="text-end">
            <strong>Total: ${cartTotal}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
