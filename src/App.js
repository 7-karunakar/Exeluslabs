import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import CustomSynthesis from './pages/CustomSynthesis';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import { ProductProvider } from './context/ProductContext'; // 🔥 import context

function App() {
  return (
    <ProductProvider> {/* ✅ Wrap everything inside */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:code" element={<ProductDetail />} />
          <Route path="/Services" element={<CustomSynthesis />} />
          <Route path="/About Us" element={<AboutUs />} />
          <Route path="/Contact Us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
