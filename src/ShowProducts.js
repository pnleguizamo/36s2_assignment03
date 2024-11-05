import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Payment from './PaymentInfo';




function ShowProducts({ cart, setCart, cartTotal, setCartTotal, dataF, setDataF, viewer, setViewer }) {
  
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
                  {product.quantity}
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
