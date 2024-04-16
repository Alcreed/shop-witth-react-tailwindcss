import { useContext } from "react"
import { Link } from "react-router-dom";
import { ShoppingCardContext } from "../../context"
import { totalPrice } from "../utils";

import { OrderCard } from "../OrderCard/OrderCard";

import "./ShoppingCart.css"

function ShoppingCart() {
  const { cartProducts, setCartProducts, order, setOrder, closeSideMenu } = useContext(ShoppingCardContext);

  const handleCheckout = () => {
    const orderToAdd = {
      id: crypto.randomUUID(),
      date: '06/04/24',
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }

    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    closeSideMenu();
  }

  return (
    <div className="myOrder_container flex flex-col gap-4">
      <div className="flex-1 flex flex-col gap-2 overflow-auto">
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
        <Link to='/my-orders/last'>
          <button 
            className={`w-full py-3 rounded-lg text-white ${cartProducts.length > 0 ? "bg-emerald-400" : "bg-slate-200 cursor-not-allowed"}`}
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </div>
  )
}

export { ShoppingCart }
