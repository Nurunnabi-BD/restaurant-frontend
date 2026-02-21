import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./header/Header";
import Footer from "./footer/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ScrollToTop from "./components/Scroll";
import Cart from "./components/Cart";
import Error from "./components/Erorr";
import SingleFood from "./components/SingleFood";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { quantity } = cartItems.reduce(
    (sum, item) => ({ quantity: sum.quantity + item.quantity }),
    { quantity: 0 },
  );
  const totalPrice = cartItems.reduce(
    (total, item) => parseInt(total + item.price * item.quantity),
    0,
  );
  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header
        cartItems={cartItems}
        setCartItems={setCartItems}
        totalPrice={totalPrice}
        quantity={quantity}
      />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<Home cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/menu"
          element={<Menu cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              totalPrice={totalPrice}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeItem={removeItem}
              quantity={quantity}
            />
          }
        />
        <Route path="*" element={<Error />} />
        <Route
          path="/menu/:documentId"
          element={
            <SingleFood cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
