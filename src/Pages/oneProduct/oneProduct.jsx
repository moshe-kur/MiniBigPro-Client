import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProductFromDB } from "../../Services";

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
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>SuplierID</th>
            <th>CategoryID</th>
            <th>QuantityPerUnit</th>
            <th>UnitPrice</th>
            <th>UnitInStock</th>
            <th>UnitsOnOrder</th>
            <th>ReorderLevel</th>
          </tr>
        </thead>
        <tbody>
          <DataRow product={product}></DataRow>
        </tbody>
      </table>
    </div>
  );
};
const DataRow = ({ product }) => {
  let {
    ID,
    Name,
    SuplierID,
    CategoryID,
    QuantityPerUnit,
    UnitPrice,
    UnitInStock,
    UnitsOnOrder,
    ReorderLevel,
  } = product;

  return (
    <tr>
      <td>{ID}</td>
      <td>{Name}</td>
      <td>{SuplierID}</td>
      <td>{CategoryID}</td>
      <td>{QuantityPerUnit}</td>
      <td>{UnitPrice}</td>
      <td>{UnitInStock}</td>
      <td>{UnitsOnOrder}</td>
      <td>{ReorderLevel}</td>
    </tr>
  );
};
