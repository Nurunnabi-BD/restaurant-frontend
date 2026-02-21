import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Erorr from "../components/Erorr";
import Loading from "../components/Loading";

export default function Menu({ cartItems, setCartItems }) {
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_APP_FOOD_API_URL}/api/foods?populate=*`,
  );

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Biryani", "Burger", "Pizza","Beef", "Snacks", "Drinks"];

  const menuData = data || [];

  const filteredMenu =
    activeCategory === "All"
      ? menuData
      : menuData.filter((item) => item.category === activeCategory);

  // ✅ Professional Cart Logic
  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, qty: cartItem.qty + 1 }
          : cartItem
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  if (loading) return <Loading />;
  if (error) return <Erorr />;

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-[1100px] mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-1 rounded-full border transition ${
                activeCategory === cat
                  ? "bg-amber-500 text-white border-amber-500"
                  : "hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MENU GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
            >
              {/* IMAGE + LINK */}
              <Link to={`/menu/${item.documentId}`}> 
                <div className="h-40 bg-gray-100 rounded mb-3 overflow-hidden cursor-pointer">
                  <img
                    className="h-full w-full object-cover hover:scale-105 transition duration-300"
                    src={`${import.meta.env.VITE_APP_FOOD_API_URL}${item.image?.url}`}
                    alt={item.title}
                  />
                </div>

                <h3 className="font-semibold text-lg hover:text-amber-500 transition">
                  {item.title}
                </h3>
              </Link>

              <p className="text-sm text-gray-500 mb-2">
                ৳ {item.price}
              </p>

              {/* ADD TO CART */}
              <button
                onClick={() => handleAddToCart(item)}
                className="mt-2 w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredMenu.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No items found in this category.
          </p>
        )}
      </div>
    </div>
  );
}
