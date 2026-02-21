import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CartDrawer from "../components/CartDrawer.jsx";

function Header({ cartItems, totalPrice, quantity, setCartItems }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-xs bg-white/900 z-30">
        <div className="flex justify-center">
          <div className="flex items-center justify-between w-full max-w-[1100px] px-4 py-2">
            {/* Logo */}
            <Link to="/">
              <img src={logo} className="max-w-[100px]" alt="Logo" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <ul className="flex gap-6">
                {menuItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `hover:text-amber-300 transition ${
                        isActive ? "text-black font-medium" : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </ul>

              {/* Auth Buttons */}
              <div
                onClick={() => navigate("/login")}
                className="users cursor-pointer bg-amber-500 p-2 rounded-full hover:bg-amber-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              <div
                onClick={() => setCartOpen(true)}
                className="cart cursor-pointer bg-amber-500 p-2 rounded-full hover:bg-amber-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
            </nav>

            {/* Mobile Open Button */}
            <div className="md:hidden flex items-center gap-5">
              <div
                onClick={() => setCartOpen(true)}
                className="mb-cart md:hidden block cursor-pointer bg-amber-500 p-3 rounded-full hover:bg-amber-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
              <button
                className="md:hidden text-2xl"
                onClick={() => setOpen(true)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE NAV */}
      <div
        className={`fixed top-0 right-0 h-full w-[50%] sm:w-[50%] bg-white z-50
        shadow-lg transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-2xl"
        >
          ✕
        </button>

        <div className="flex flex-col items-center gap-6 pt-20">
          <img src={logo} className="max-w-[100px]" alt="Logo" />

          <ul className="flex flex-col gap-5 text-lg">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `hover:text-amber-400 ${
                    isActive ? "text-amber-500 font-medium" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-3 w-full px-6 mt-4">
            <Link to="/login" onClick={() => setOpen(false)}>
              <button className="w-full border py-2 rounded hover:bg-gray-100">
                Login
              </button>
            </Link>
            <Link to="/register" onClick={() => setOpen(false)}>
              <button className="w-full bg-primary text-white py-2 rounded hover:opacity-90">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* Spacer */}
      <div className="h-[70px]" />
      <CartDrawer
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cartItems}
        totalPrice={totalPrice}
        setCartItems={setCartItems}
        quantity={quantity}
      />
    </>
  );
}

export default Header;
