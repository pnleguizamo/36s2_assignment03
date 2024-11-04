import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";

const Browse = ({catalog, setCatalog, cart, setCart, cartTotal, setCartTotal}) => {
  // const [catalog, setCatalog] = useState([]);
  // const [cart, setCart] = useState([]);
  // const [cartTotal, setCartTotal] = useState(0);

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
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setCartTotal(total);
  }, [cart]);

  const howManyofThis = (id) => {
    const item = cart.find(cartItem => cartItem.id === id);
    return item ? item.quantity : 0;
  };

  const addToCart = (el) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === el.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === el.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...el, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (el) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === el.id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          return prevCart.map(item =>
            item.id === el.id ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {
          return prevCart.filter(item => item.id !== el.id);
        }
      }
      return prevCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartItems = cart.map((el, index) => (
    <div key={index}>
      <img className="img-fluid" src={el.image} width={150} alt={el.title} />
      {el.title} ${el.price} x {el.quantity}
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
      <h2 className="my-4">Browse Fish</h2>
      <div className="row">{listItems}</div>
      <div className="card mt-4">
        <div className="card-header">
          <h4>Shopping Cart</h4>
        </div>
        <div className="card-body">
          <div>{cartItems.length > 0 ? cartItems : <p>Cart is Empty!</p>}</div>
          <div className="text-end">
            <strong>Total: ${cartTotal.toFixed(2)}</strong>
            <div className="mt-2">
              <button className="btn btn-warning" onClick={clearCart}>
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
