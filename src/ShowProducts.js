import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";




function ShowProducts({ cart, setCart }) {
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

const uniqueProductsArray = getUniqueProductsWithQuantities(cart);


  return (
    <div >

      {/* <Navbar/> */}
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
            {uniqueProductsArray.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} width={150} alt="Item" />
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
    </div>
  );
}
export default ShowProducts;
