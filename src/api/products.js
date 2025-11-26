import axios from "axios";

const BASE_URL = "https://dummyjson.com/products?limit=1000&select=id,title,price,images,category,description";

export const fetchAllProducts = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data.products; // array of 1000 products with selected fields
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
