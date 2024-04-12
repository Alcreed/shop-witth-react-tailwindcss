import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCardProvider } from './context/index';

import { Home } from './pages/Home/Home';
import { MyOrder } from './pages/MyOrder/MyOrder';
import { MyOrders } from './pages/MyOrders/MyOrders';
import { MyAccount } from './pages/MyAccount/MyAccount';
import { SignIn } from './pages/SignIn/SignIn';
import { NotFound } from './pages/NotFound/NotFound';
import { Navbar } from './components/Navbar/Navbar';
import { Layout } from './components/Layout/Layout';
import { SideMenu } from './components/SideMenu/SideMenu';

import './App.css';

const Routes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '*', element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  return (
    <ShoppingCardProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <Routes />
        </Layout>
        <SideMenu />
      </BrowserRouter>
    </ShoppingCardProvider>
  );
}

export default App;
