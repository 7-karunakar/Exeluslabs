import React, { createContext, useEffect, useState } from 'react';
import productsData from '../data/products.json'; // adjust path as needed

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData); // or fetch from API
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
