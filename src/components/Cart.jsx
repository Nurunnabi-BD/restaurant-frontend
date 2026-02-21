function Cart({ cartItems, totalPrice, increaseQty, decreaseQty, removeItem }) {


  return (
    <div className="max-w-[1100px] mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between gap-4 border p-4 rounded-lg shadow-sm"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={`${import.meta.env.VITE_APP_FOOD_API_URL}${item.image.url}`}
                    alt={item.title}
                    className="w-20 h-20 rounded object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      ৳ {item.price}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 border rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 border rounded"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal */}
                <div className="font-medium">
                  ৳ {item.price * item.quantity}
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t pt-6">
            <h3 className="text-xl font-semibold">
              Total: ৳ {totalPrice}
            </h3>

            <button className="bg-primary text-white px-6 py-2 rounded hover:opacity-90">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
