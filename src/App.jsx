import { useRoutes, BrowserRouter } from 'react-router-dom'

import { Home } from './pages/Home/Home.jsx'
import { MyOrder } from './pages/MyOrder/MyOrder.jsx'
import { MyOrders } from './pages/MyOrders/MyOrders.jsx'
import { MyAccount } from './pages/MyAccount/MyAccount.jsx'
import { SignIn } from './pages/SignIn/SignIn.jsx'
import { NotFound } from './pages/NotFound/NotFound.jsx'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { Layout } from './components/Layout/Layout.jsx'

import './App.css'

const Routes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '*', element: <NotFound /> },
  ])

  return routes
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
