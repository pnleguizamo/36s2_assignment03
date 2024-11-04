import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Browse = () => {
  const [catalog, setCatalog] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

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
    <div className="row border-top border-bottom" key={el.id}>
      <div className="row main align-items-center">
        <div className="col-2">
          <img className="img-fluid" src={el.image} alt={el.title} />
        </div>
        <div className="col">
          <div className="row text-muted">{el.title}</div>
          <div className="row">{el.category}</div>
          <div className="row">{el.description}</div>
        </div>
        <div className="col">
          <button type="button" onClick={() => removeFromCart(el)}>
            {" "}
            -{" "}
          </button>{" "}
          <button type="button" onClick={() => addToCart(el)}>
            {" "}
            +{" "}
          </button>
        </div>
        <div className="col">
          ${el.price} <span className="close">&#10005;</span>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h2>Browse Products</h2>
      <div className="card">
        <div>{listItems}</div>
      </div>
      <div>
        <h4>Shopping Cart</h4>
        <div>{cartItems}</div>
      </div>
    </div>
  );
};

export default Browse;
