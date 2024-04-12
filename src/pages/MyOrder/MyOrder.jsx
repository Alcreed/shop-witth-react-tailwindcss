import { useContext } from "react";
import { ShoppingCardContext } from "../../context";
import { OrderCard } from "../../components/OrderCard/OrderCard";

function MyOrder() {
  const { order } = useContext(ShoppingCardContext);
  let lastOrder = order?.at(-1)?.products || [];

  return (
    <div>
      My order
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
