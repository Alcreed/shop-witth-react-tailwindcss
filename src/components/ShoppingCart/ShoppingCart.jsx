import { useContext } from "react"
import { ShoppingCardContext } from "../../context"
import { totalPrice } from "../utils";

import { OrderCard } from "../OrderCard/OrderCard";

import "./ShoppingCart.css"

function ShoppingCart() {
  const { cartProducts } = useContext(ShoppingCardContext);

  return (
    <div className="myOrder_container flex flex-col gap-4">
      <div className="myOrder_list flex flex-col gap-2 overflow-auto">
        {cartProducts.length > 0 ?
          cartProducts.map(card => {
            return (
              <OrderCard key={card.id} productData={card} />
            )
          })
        : null}
      </div>
      <div className="py-1">
        <p className="flex justify-between items-center">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
      </div>
    </div>
  )
}

export { ShoppingCart }
