import React, { useEffect, useState } from "react";
import getProductsFromDB from "../../Services";

export const Products = (props) => {
  const [productsObject, setProductsObject] = useState([]);

  useEffect(() => {
    const helpUse = async () => {
      await setDataToObj();
      console.log("productsObject from UseEffect");
      console.log(productsObject);
    };
    helpUse();
  }, []);

  const setDataToObj = async () => {
    let products = await getProductsFromDB();
    setProductsObject(products);
    console.log("products from setData");
    console.log(products);
    console.log("productsObject from setData");
    console.log(productsObject);
  };

  console.log("before return");
  console.log(productsObject);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ProductID</th>
            <th>ProductName</th>
            <th>UnitPrice</th>
            <th>UnitsInStock</th>
          </tr>
        </thead>
        <tbody>
          {productsObject.length > 0 ? (
            productsObject.map((p) => {
              let { ProductID, ProductName, UnitPrice, UnitInStock } = p;
              return (
                <tr>
                  <td>{ProductID}</td>
                  <td>
                    <a href={"Product/" + ProductID}> {ProductName}</a>
                  </td>
                  <td>{UnitPrice}</td>
                  <td>{UnitInStock}</td>
                </tr>
              );
            })
          ) : (
            <h1>5</h1>
          )}
        </tbody>
      </table>
    </div>
  );
};
