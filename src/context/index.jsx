/* eslint-disable import/no-duplicates */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { createContext } from 'react';
import { useState } from 'react';
import { ProductDetail } from '../components/ProductDetail/ProductDetail';
import { ShoppingCart } from '../components/ShoppingCart/ShoppingCart';

export const ShoppingCardContext = createContext();

export function ShoppingCardProvider({ children }) {
  // Shopping cart
  const [count, setCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  // Show product
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const openSideMenu = () => {

    setIsSideMenuOpen(true);
  };

  const closeSideMenu = () => setIsSideMenuOpen(false);
  
  // Product detail
  const [productToShow, setProductToShow] = useState({});

  // SideMenu data
  const [sideMenuComponentSelected, setSideMenuComponentSelected] = useState();
  const sideMenuComponent = (component) => {
    const menuOptions = {
      'productDetail': {
        title: "Detail",
        component: <ProductDetail />
      },
      'shoppingCart': {
        title: "My order",
        component: <ShoppingCart />
      }
    }

    setSideMenuComponentSelected(menuOptions[component]);
  }

  const removeProduct = (e, productData) => {
    e.stopPropagation();
    const productCart = cartProducts.filter(product => product.id !== productData.id);
    setCartProducts(productCart);
  }

  return (
    <ShoppingCardContext.Provider
      value={{
        count,
        isSideMenuOpen,
        productToShow,
        cartProducts,
        sideMenuComponentSelected,

        setCount,
        openSideMenu,
        closeSideMenu,
        setProductToShow,
        setCartProducts,
        sideMenuComponent,
        setSideMenuComponentSelected,
        removeProduct
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
}
