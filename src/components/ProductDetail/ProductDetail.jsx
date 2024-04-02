import { useContext } from 'react';
import { ShoppingCardContext } from '../../context';

function ProductDetail() {
  const { productToShow } = useContext(ShoppingCardContext);

  return (
    <>
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
    </>
  );
}

export { ProductDetail };
