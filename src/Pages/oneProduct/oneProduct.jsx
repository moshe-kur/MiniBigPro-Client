import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getOneProductFromDB,
  sendProductToDB,
  deleteProductFromDB,
} from "../../Services";

import "./style.css";

export const OneProduct = () => {
  let { id } = useParams();

  const [product, setProduct] = useState({});

  const init = async () => {
    let current = await getOneProductFromDB(id);
    console.log("current from init");
    console.log(current);
    setProduct(current);
  };

  const sendToDB = async (product) => {
    if (product.CategoryID > 8) {
      return alert("there is only 8 categories");
    }
    if (product.SupplierID > 29) {
      return alert("there is only 29 supliers");
    }

    await sendProductToDB(product);
    console.log("After Send");
    console.log(product);
  };

  const deleteFromDB = async (id) => {
    await deleteProductFromDB(id);
    console.log("product delete: ", id);
    setProduct({});
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="productPage">
      <label htmlFor="ProductID">ProductID</label>
      <input type="text" id="ProductID" value={product.ProductID}></input>{" "}
      <br></br>
      <label htmlFor="ProductName">ProductName</label>
      <input
        type="text"
        id="ProductName"
        defaultValue={product.ProductName}
        onChange={(event) =>
          setProduct((prev) => {
            prev.ProductName = event.target.value;
            return prev;
          })
        }
      ></input>
      <br></br>
      <label htmlFor="SupplierID">SupplierID</label>
      <input
        type="number"
        id="SupplierID"
        defaultValue={product.SupplierID}
        onChange={(event) =>
          setProduct((prev) => {
            prev.SupplierID = event.target.value;
            return prev;
          })
        }
      ></input>
      <br></br>
      <label htmlFor="CategoryID">CategoryID</label>
      <input
        type="number"
        id="CategoryID"
        defaultValue={product.CategoryID}
        onChange={(event) =>
          setProduct((prev) => {
            prev.CategoryID = event.target.value;
            return prev;
          })
        }
      ></input>
      <br></br>
      <label htmlFor="QuantityPerUnit">QuantityPerUnit</label>
      <input
        type="text"
        id="QuantityPerUnit"
        defaultValue={product.QuantityPerUnit}
        onChange={(event) =>
          setProduct((prev) => {
            prev.QuantityPerUnit = event.target.value;
            return prev;
          })
        }
      ></input>
      <br></br>
      <label htmlFor="UnitPrice">UnitPrice</label>
      <input
        type="number"
        id="UnitPrice"
        defaultValue={product.UnitPrice}
        onChange={(event) =>
          setProduct((prev) => {
            prev.UnitPrice = parseFloat(event.target.value);
            return prev;
          })
        }
      ></input>
      <br></br>
      <label htmlFor="UnitsInStock">UnitInStock</label>
      <input
        type="number"
        id="UnitsInStock"
        defaultValue={product.UnitsInStock}
        onChange={(event) =>
          setProduct((prev) => {
            prev.UnitsInStock = parseInt(event.target.value);
            return prev;
          })
        }
      ></input>
      <br></br>
      <label htmlFor="UnitsOnOrder">UnitsOnOrder</label>
      <input type="text" id="UnitsOnOrder" value={product.UnitsOnOrder}></input>
      <br></br>
      <label htmlFor="ReorderLevel">ReorderLevel</label>
      <input type="text" id="ReorderLevel" value={product.ReorderLevel}></input>
      <br></br>
      <div>
        <button onClick={() => sendToDB(product)}>Send</button>
      </div>
      <div>
        <button onClick={() => deleteFromDB(product.ProductID)}>Delete</button>
      </div>
    </div>
  );
};
