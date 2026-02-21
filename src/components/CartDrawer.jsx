import { Link } from "react-router-dom";

function CartDrawer({ cartOpen, setCartOpen, cartItems, totalPrice,}) {

  return (
    <>
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[60%] sm:w-[400px] bg-white z-50
        shadow-lg transform transition-transform duration-300
        ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-semibold text-lg">Your Cart</h3>
          <button
            onClick={() => setCartOpen(false)}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4 flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-sm text-gray-500">
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-sm"
              >
                <div>
                  <p>{item.title}</p>
                  <p className="text-gray-500">
                    {item.quantity} × ৳{item.price}
                  </p>
                </div>
                <p>৳{item.quantity * item.price}</p>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between mb-3 font-medium">
              <span>Total:</span>
              <span>৳ {totalPrice}</span>
            </div>

            <Link to="/cart" onClick={() => setCartOpen(false)}>
              <button className="w-full bg-primary text-white py-2 rounded hover:opacity-90">
                View Cart
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Overlay */}
      {cartOpen && (
        <div
          onClick={() => setCartOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        ></div>
      )}
    </>
  );
}

export default CartDrawer;
