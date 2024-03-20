import { XCircleIcon } from '@heroicons/react/24/solid';

import './ProductDetail.css';

function ProductDetail() {
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white p-6">
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">Detail</h2>
        <XCircleIcon className="h-6 w-6 text-black" />
      </div>
    </aside>
  );
}

export { ProductDetail };
