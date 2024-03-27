/* eslint-disable import/no-duplicates */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { createContext } from 'react';
import { useState } from 'react';

export const ShoppingCardContext = createContext();

export function ShoppingCardProvider({ children }) {
  const [count, setCount] = useState(0);

  // Show product
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  
  // Product detail
  const [productToShow, setProductToShow] = useState({});

  return (
    <ShoppingCardContext.Provider
      value={{
        count,
        isProductDetailOpen,
        productToShow,

        setCount,
        openProductDetail,
        closeProductDetail,
        setProductToShow
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
}
