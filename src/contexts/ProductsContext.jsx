import { createContext, useState, useContext, useEffect } from "react";
import { fetchAllProducts } from "../api/products";

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

// Seeded random number generator
function seededRandom(seed) {
  let x = seed;
  return function() {
    x = (x * 9301 + 49297) % 233280;
    return x / 233280;
  };
}

// Seeded shuffle function
function seededShuffle(array, seed) {
  const random = seededRandom(seed);
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const ProductsProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const data = await fetchAllProducts();
      const shuffled = seededShuffle(data, 42); // Fixed seed for consistent mix
      setAllProducts(shuffled);
      setLoading(false);
    };
    loadProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        loading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};