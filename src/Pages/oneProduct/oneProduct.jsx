import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProductFromDB } from "../../Services";
import "./style.css";

export const OneProduct = () => {
  let { id } = useParams();

  const [product, setProduct] = useState({});

  const init = async () => {
    let current = await getOneProductFromDB(id);
    setProduct(current);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="productPage">
      <ul>
        <li>ID</li>
        <li>Name</li>
        <li>SuplierID</li>
        <li>CategoryID</li>
        <li>QuantityPerUnit</li>
        <li>UnitPrice</li>
        <li>UnitInStock</li>
        <li>UnitsOnOrder</li>
        <li>ReorderLevel</li>
      </ul>

      <DataRow product={product}></DataRow>
    </div>
  );
};
const DataRow = ({ product }) => {
  return (
    <ul>
      <li>{product.ID}</li>

      <input type="text" id="fname" name="fname" value={product.Name}></input>

      <li>{product.SuplierID}</li>
      <li>{product.CategoryID}</li>
      <li>{product.QuantityPerUnit}</li>
      <li>{product.UnitPrice}</li>
      <li>{product.UnitInStock}</li>
      <li>{product.UnitsOnOrder}</li>
      <li>{product.ReorderLevel}</li>
    </ul>
  );
};
