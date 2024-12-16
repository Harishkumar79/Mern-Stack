import './app.css';
import { Route, Routes } from "react-router-dom"
import NoteFound from './components/not-found';
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin-view/layout"
import AdminDashboard from "./pages/admin-view/dashboard"
import AdminProducts from "./pages/admin-view/products"
import AdminOrders from "./pages/admin-view/orders"
import AdminFeatures from "./pages/admin-view/features"
import ShopingLayout from "./components/shopping-view/layout"
import ShoppingHome from './pages/shopping-view/home';
import ShoppingAccount from './pages/shopping-view/account';
import ShoppingListing from './pages/shopping-view/listing';
import ShoppingCheckout from './pages/shopping-view/checkout';

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common components */}


      {/* routes */}
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<h1>HOME PAGE</h1>}></Route>
        {/* auth */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        {/* admin-view */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        {/* shopping-view */}
        <Route path="/shop" element={<ShopingLayout />}>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>
        {/* PAGE NOT FOUND */}
        <Route path="*" element={<NoteFound />}></Route>
      </Routes>
    </div>
  )
}

export default App;
