import { Home } from './pages/Home/Home.jsx'
import { MyAccount } from './pages/MyAccount/MyAccount.jsx'
import { MyOrder } from './pages/MyOrder/MyOrder.jsx'
import { MyOrders } from './pages/MyOrders/MyOrders.jsx'
import { SignIn } from './pages/SignIn/SignIn.jsx'
import { NotFound } from './pages/NotFound/NotFound.jsx'

import './App.css'

function App() {
  return (
    <>
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders />
      <SignIn />
      <NotFound />
    </>
  )
}

export default App
