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

export default getProductsFromDB;
