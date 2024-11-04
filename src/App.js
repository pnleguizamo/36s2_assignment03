
import Browse from './Browse';
import './style.css';
import './App.css';
import ShowProducts from './ShowProducts';
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";

function App() {

  const [catalog, setCatalog] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [viewer, setViewer] = useState(0);

  const renderComponent = () => {
    switch (viewer) {
      case 0:
        return <Browse catalog = {catalog} setCatalog = {setCatalog} cart = {cart} setCart = {setCart} cartTotal={cartTotal} setCartTotal={setCartTotal} />;
      case 1:
        return <ShowProducts cart = {cart} setCart = {setCart}/>;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setViewer(0)}>Browse</button>
        <button onClick={() => setViewer(1)}>Checkout</button>
      </nav>
      <div>
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
