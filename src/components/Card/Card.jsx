/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';

import { ShoppingCardContext } from '../../context';

function Card({ data }) {
  const { 
    count,
    setCount,
    openSideMenu,
    setProductToShow,
    cartProducts,
    setCartProducts,
    sideMenuComponent,
    removeProduct
  } = useContext(ShoppingCardContext);

  const addItemShoppingCart = (e) => {
    e.stopPropagation();
    setCount(count + 1);
    setCartProducts([...cartProducts, data]);
  }

  const showProductDetail = () => {
    setProductToShow(data);
    sideMenuComponent('productDetail')
    openSideMenu();
  }

  const renderIcon = () => {
    const isInCart = cartProducts.find(product => product.id === data.id);
    
    return (
      <button
        type="button"
        className={`absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 ${isInCart ? 'bg-green-400' : 'bg-white'}`}
        onClick={(e) => isInCart ? removeProduct(e, data) : addItemShoppingCart(e)}
      >
        {isInCart ? <CheckIcon className="w-4 h-4 text-white" /> : <PlusIcon className="w-4 h-4" />}
      </button>
    )
  }

  return (
    <div 
      className="flex flex-col bg-white cursor-pointer w-56 h-60 rounded-lg overflow-hidden"
      onClick={() => showProductDetail()}
    >
      <figure className="relative w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1 capitalize">{data?.category}</span>
        <img
          className="w-full h-full object-cover"
          src={data.image}
          alt={data.title}
        />
        {renderIcon()}
      </figure>
      <p className="flex justify-between items-center bg-gray-100 p-1 flex-1">
        <span className="text-sm font-light line-clamp-1 text-ellipsis whitespace-nowrap overflow-hidden mr-3">{data.title}</span>
        <span className="text-lg font-medium">
          $
          {data.price}
        </span>
      </p>
    </div>
  );
}

export { Card };
