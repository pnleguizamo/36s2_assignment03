import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Payment from './PaymentInfo';




function ShowProducts({ cart, setCart, cartTotal, setCartTotal, dataF, setDataF, viewer, setViewer }) {
  // const [catalog, setCatalog] = useState([]);
  // const [filteredCatalog, setFilteredCatalog] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');
  // const [cart, setCart] = useState([]);


  const fetchData = async () => {
    const response = await fetch("/products.json");
    const data = await response.json();

    // setCart(data);

    // const responseCategories = await fetch("/categories.json");
    // const dataCategories = await responseCategories.json();
    // setCategories(dataCategories);
    // console.log(dataCategories);
  };

  useEffect(() => {
    fetchData();
  }, [])

  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  }

  const getUniqueProductsWithQuantities = (cart) => {
    const uniqueProducts = {};

    cart.forEach(product => {
      if (!uniqueProducts[product.id]) {
        uniqueProducts[product.id] = { ...product, quantity: product.quantity };
      } else {
        uniqueProducts[product.id].quantity += product.quantity;
      }
    });


    return Object.values(uniqueProducts);
  };

  const cartItems = cart.map((el, index) => (
    <div key={index}>
      <img className="img-fluid" src={el.image} width={150} alt={el.title} />
      {el.title} ${el.price} x {el.quantity}
    </div>
  ));

  const uniqueProductsArray = getUniqueProductsWithQuantities(cart);


  return (
    <div >
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody id="cart_body">
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} width={150} alt="Item" />
                  <h3>{product.title}</h3>
                </td>
                <td>
                  {howManyofThis(product.id)}
                </td>
                <td>
                  {product.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Payment dataF = {dataF} setDataF = {setDataF} viewer = {viewer} setViewer = {setViewer} />
    </div>
  );
}
export default ShowProducts;
