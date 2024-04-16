import { ShoppingCartIcon } from "@heroicons/react/24/solid"

function OrdersCard({ totalPrice, totalProducts, date }) {
  return (
    <div className="flex justify-between items-center bg-slate-300 rounded-lg p-2 gap-3 border border-black">
      <p className="w-full flex flex-col">
        <span className="w-full flex justify-between items-center">
          <strong>Precio:</strong> $ {totalPrice}
        </span>
        <span className="w-full flex justify-between items-center">
          <strong>Productos:</strong> {totalProducts}
        </span>
        <span className="w-full flex justify-between items-center">
          <strong>Fecha:</strong> {date}
        </span>
      </p>
    </div>
  )
}

export { OrdersCard }
