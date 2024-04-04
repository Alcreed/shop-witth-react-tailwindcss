import { useContext } from "react"
import { ShoppingCardContext } from "../../context"
import { OrderCard } from "../OrderCard/OrderCard";

function ShoppingCart() {
  const { cartProducts } = useContext(ShoppingCardContext);

  return (
    <div className="scrollbar-styles flex flex-col gap-4 h-full overflow-auto">
      {cartProducts.length > 0 ?
        cartProducts.map(card => {
          return (
            <OrderCard key={card.id} productData={card} />
          )
        })
      : null}
    </div>
  )
}

export { ShoppingCart }
