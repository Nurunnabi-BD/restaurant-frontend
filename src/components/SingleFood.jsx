import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import Erorr from "../components/Erorr";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
export default function SingleFood({ cartItems, setCartItems }) {
  const { documentId } = useParams();

  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_APP_FOOD_API_URL}/api/foods/${documentId}?populate=*`,
  );

  const [qty, setQty] = useState(1);

  if (loading) return <Loading />;
  if (error) return <Erorr />;
  if (!data) {
    return <p className="text-center mt-10 text-red-500">Food not found!</p>;
  }

  return (
    <>
      <div className="pt-24 pb-16">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* IMAGE */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={`${import.meta.env.VITE_APP_FOOD_API_URL}${data.image.url}`}
                alt={data.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* DETAILS */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">{data.title}</h1>

              <p className="text-gray-600">
                <BlocksRenderer content={data.description} />
              </p>

              <p className="text-2xl font-semibold text-amber-500">
                ৳ {data.price}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => qty > 1 && setQty(qty - 1)}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>

                <span className="text-xl font-medium">{qty}</span>

                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Add To Cart */}
              <button
                onClick={() => {
                  const item = {
                    ...data,
                    quantity: qty,
                  };
                  setCartItems((prev) => [...prev, item]);
                }}
                className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition w-full md:w-auto"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
