import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ShoppingCardContext } from "../../context";
import { OrderCard } from "../../components/OrderCard/OrderCard";

function MyOrder() {
  const { order } = useContext(ShoppingCardContext);
  const { id } = useParams();
  let lastOrder = id ? order.find(card => card.id === id).products : order?.at(-1)?.products || [];

  return (
    <div>
      <div className="flex w-80 justify-center items-center gap-2 m-auto">
        <Link to='/my-orders'>
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My order</h1>
      </div>

      <div className="flex flex-col gap-2 py-5">
        {lastOrder.length > 0 ?
          lastOrder.map(card => {
            return (
              <OrderCard key={card.id} productData={card} canDelete/>
            )
          })
        : null}
      </div>
    </div>
  );
}

export { MyOrder };
