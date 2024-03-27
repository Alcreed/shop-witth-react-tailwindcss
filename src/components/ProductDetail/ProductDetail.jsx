import { XCircleIcon } from '@heroicons/react/24/solid';

import { useContext } from 'react';
import { ShoppingCardContext } from '../../context';

import './ProductDetail.css';

function ProductDetail() {
  const { isProductDetailOpen, closeProductDetail, productToShow } = useContext(ShoppingCardContext);
  console.log('productToShow', productToShow);

  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col gap-3 fixed right-0 border border-black rounded-lg bg-white p-6`}>
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">Detail</h2>
        <XCircleIcon 
          className="h-6 w-6 text-black cursor-pointer" 
          onClick={() => closeProductDetail(false)}
        />
      </div>

      <figure>
        <img 
          className="w-full h-full rounded-lg"
          src={productToShow.image} 
          alt={productToShow.title} 
        />
      </figure>

      <p className="flex flex-col gap-3 py-6">
        <span className="font-medium text-2xl text-center">$ {productToShow.price}</span>
        <span className="font-medium text-md text-center">{productToShow.title}</span>
        <span className="font-light text-sm">{productToShow.description}</span>
      </p>
    </aside>
  );
}

export { ProductDetail };
