import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Profile from './Components/Pages/Profile';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import ProductList from './Components/Products/ProductList';
import Product from './Components/Products/Product';
import Admin from './Components/Admin/Admin';

function App() {
  return (
    <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/:id" element={<Product />} /> 
          <Route path="/profile/:uname" element={<Profile />} />

          <Route path="/admin" element={<Admin />}>
            <Route path='dash' element={<h1>Dashboard</h1>} />
            <Route path='product' element={<h1>Products</h1>} />
          </Route>

          <Route path="*" element={<h1>Page Not Found !</h1>} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
