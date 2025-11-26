import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notification from "./components/Notification";
import { CartProvider } from "./contexts/CartContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import "./App.css";

function App() {
  return (
    <NotificationProvider>
      <ProductsProvider>
        <CartProvider>
          <Router>
            <div className="min-h-screen flex flex-col  dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400">
              <Header />
              <main className="grow ">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:category" element={<Products />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </main>
              <Footer />
              <Notification />
            </div>
          </Router>
        </CartProvider>
      </ProductsProvider>
    </NotificationProvider>
  );
}

export default App;
