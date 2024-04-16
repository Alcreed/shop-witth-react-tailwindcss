import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrdersCard } from "../../components/OrdersCard/OrdersCard";
import { ShoppingCardContext } from "../../context";

function MyOrders() {
  const { order } = useContext(ShoppingCardContext);
  console.log("🚀 ~ MyOrders ~ order:", order)

  return (
    <div>
      <div className="flex w-80 justify-center items-center gap-2 mb-3">
        <h1>My orders</h1>
      </div>

      <div className="flex flex-col gap-2">
        {order.length > 0 ?
          order.map((orderCard) => (
            <Link key={orderCard.id} to={`/my-order/${orderCard.id}`}>
              <OrdersCard
                totalPrice={orderCard.totalPrice}
                totalProducts={orderCard.totalProducts}
                date={orderCard.date}
              />
            </Link>
          ))
          : null
        }
      </div>
    </div>
  );
}

export { MyOrders };
