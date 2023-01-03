import axios from "axios";

export const getProductsFromDB = async () => {
  try {
    let endpoint = "http://localhost:7007/api/Products/Get";
    let response = await axios.get(endpoint);
    console.log("response from data");
    console.log(response);

    if (response.status === 200) {
      return Object.values(response.data);
    }
  } catch (error) {
    console.error(error);
  }
};

export const getOneProductFromDB = async (id) => {
  try {
    let endpoint = `http://localhost:7007/api/Products/Get/${id}`;
    let response = await axios.get(endpoint);
    console.log("response from data");
    console.log(response);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const sendProductToDB = async (product) => {
  try {
    let endpoint = `http://localhost:7007/api/Products/Update`;
    let response = await axios.post(endpoint, product);
    console.log("response from data");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const deleteProductFromDB = async (id) => {
  try {
    let endpoint = `http://localhost:7007/api/Products/Remove`;
    let response = await axios.post(endpoint, id);
    console.log("response from data");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export default getProductsFromDB;
