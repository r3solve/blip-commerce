import {  Routes, Route } from 'react-router-dom'
import Home from '../home/Home';
import ProductList from '../products-list/ProductList';
import Footer from '../../components/footer/Footer';
import AdminPage from '../admin/AdminPage';
import DashboardTab from '../admin/Tabs/DashboardTab';
import Cart from '../cart/Cart';
import Login from '../auth/LoginPage';
import Register from '../auth/RegisterPage';
import CustomersTab from '../admin/Tabs/CustomersTab';
import OrdersTab from '../admin/Tabs/OrdersTab';
import ProductsTab from '../admin/Tabs/ProductsTab';

function RoutesLayout() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="category/" element={<ProductList />}>
          <Route path=":category" element={<ProductList />} />
        </Route>
      </Route>
      <Route path='/admin' element={<AdminPage />}>
            <Route path='dashboard' index element={<DashboardTab/>} />
            <Route path='customers' element={<CustomersTab />} />
            <Route path='orders' element={<OrdersTab />} />
            <Route path='products' element={<ProductsTab />}  />
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/accounts/login" element={<Login />}></Route>
          <Route path="/accounts/signup" element={<Register />}></Route>
        </Routes>
     <Footer />
    </>
  );
}

export default RoutesLayout