/* eslint-disable import/no-duplicates */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

import { ProductDetail } from '../components/ProductDetail/ProductDetail';
import { ShoppingCart } from '../components/ShoppingCart/ShoppingCart';

export const ShoppingCardContext = createContext();

export function ShoppingCardProvider({ children }) {
  // Shopping cart
  const [count, setCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [order, setOrder] = useState([]);

  // Get products
  const [items, setItems] = useState([]);

  // Show product
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const openSideMenu = () => setIsSideMenuOpen(true);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('https://fakestoreapi.com/products');
        // const data = await response.json();
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setItems(data);
      } catch (error) {
        throw new Error(`Hubo un error: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <ShoppingCardContext.Provider
      value={{
        count,
        isSideMenuOpen,
        productToShow,
        cartProducts,
        sideMenuComponentSelected,
        order,
        items,

        setCount,
        openSideMenu,
        closeSideMenu,
        setProductToShow,
        setCartProducts,
        sideMenuComponent,
        setSideMenuComponentSelected,
        removeProduct,
        setOrder,
        setItems
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
}
