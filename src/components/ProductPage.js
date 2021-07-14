import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const ProductPage = (props) => {
  const productList = useSelector((state) => state.productList);
  const shoppingCart = useSelector(state => state.shoppingCart);
  let aProduct = productList.filter(
    (p) => p.productNumber === props.location.state.productNumber
  );
  return (
    <div>
      <h1>ProductPage</h1>
      <p>shopping cart Items:{shoppingCart.cartList.length}</p>
      <p>totalCharge:{shoppingCart.totalMoney}</p>
      <table>
        <thead>
          <tr>
            <th>Product Number</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Number in Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr key={aProduct[0].productNumber}>
            <td>{aProduct[0].productNumber}</td>
            <td>{aProduct[0].productName}</td>
            <td>{aProduct[0].price}</td>
            <td>{aProduct[0].numberInStock}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
