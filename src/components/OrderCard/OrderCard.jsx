import { XCircleIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCardContext } from '../../context';

function OrderCard({ productData, canDelete }) {
  const { removeProduct } = useContext(ShoppingCardContext);

  return (
    <div className="flex justify-between items-center bg-slate-300 rounded-lg p-2 gap-3">
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={productData?.image} alt={productData?.title} />
        </figure>
        <p className='text-sm font-light'>{productData?.title}</p>
      </div>

      {!canDelete ?
        <div className='flex items-center gap-2'>
          <p className='text-lg font-medium'>{productData?.price}</p>
          <XCircleIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={(e) => removeProduct(e, productData)}
          />
        </div>
      : null
      }
    </div>
  )
}

export { OrderCard }
