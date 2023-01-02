import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProductFromDB } from "../../Services";

export const OneProduct = () => {
  let { id } = useParams();
  console.log("id :", id);

  const [oneProducts, setProduct] = useState([]);

  useEffect(() => {
    const helpUse = async () => {
      await setDataToObj();
      console.log("productsObject from UseEffect");
    };
    helpUse();
  }, []);

  const setDataToObj = async () => {
    let product = await getOneProductFromDB(id);
    setProduct(product);
  };

  console.log(oneProducts);
  console.log(id);
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
            <th>Discontinued</th>
          </tr>
        </thead>
        <tbody>
          {oneProducts.map((p) => {
            console.log("reto", p);
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
              Discontinued,
            } = p;

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
                <td>{Discontinued}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
