import { Link } from "react-router-dom";
import heroImg from "../assets/logo.png";
import useFetch from "../hooks/useFetch";
import Erorr from "../components/Erorr";
import Loading from "../components/Loading";

export default function Home({cartItems, setCartItems}) {
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_APP_FOOD_API_URL}/api/popular-items?populate=*`,
  );
  if(loading){
    return <>
      <Loading />
    </>
  } ;
  if(error){
    return <>
      <Erorr />
    </>;
  };
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="pt-24 bg-gradient-to-r from-amber-50 to-white top-0 left-0 w-full">
        <div className="max-w-[1100px] mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Delicious Food, <span className="text-amber-500">Delivered Fast</span>
            </h1>
            <p className="mt-4 text-gray-600">
              Order your favorite meals anytime. Fresh ingredients, fast delivery,
              and unbeatable taste.
            </p>
            <div className="mt-6 flex gap-4">
              <Link to="/menu">
                <button className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition">
                  Order Now
                </button>
              </Link>
              <Link to="/about">
                <button className="px-6 py-2 border rounded-lg hover:bg-gray-100 transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img src={heroImg} alt="Food" className="max-w-[420px] w-full" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Why Choose Us
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Feature title="Fast Delivery" desc="Get your food within 30 minutes." />
            <Feature title="Fresh Food" desc="Made with fresh & quality ingredients." />
            <Feature title="Best Price" desc="Affordable prices & great offers." />
          </div>
        </div>
      </section>

      {/* POPULAR ITEMS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Popular Dishes
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
              >
                <div className="h-32 bg-gray-200 rounded mb-3">
                  <img className="h-32 w-full object-cover rounded"
                    src={`${import.meta.env.VITE_APP_FOOD_API_URL}${item.image.url}`}
                    alt={item.title}
                  />
                </div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-500">৳{item.price}</p>
                <button onClick={() => setCartItems([...cartItems, item])}  className="mt-3 w-full bg-amber-500 text-white py-1 rounded hover:bg-amber-600">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-500 text-white text-center">
        <h2 className="text-3xl font-semibold">Hungry? Let’s Fix That.</h2>
        <p className="mt-3">Order now and enjoy delicious food today!</p>
        <Link to="/menu">
          <button className="mt-6 px-8 py-2 bg-white text-amber-600 rounded-lg font-medium hover:bg-gray-100">
            Browse Menu
          </button>
        </Link>
      </section>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="text-center p-6 border rounded-xl hover:shadow transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 mt-2">{desc}</p>
    </div>
  );
}
