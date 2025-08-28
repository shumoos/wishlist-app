import React from "react";

export default function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cart.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg shadow">
              <img
                src={item.image}
                alt={item.name}
                className="mb-2 w-full h-60 object-contain bg-white rounded "
              />
              <h3 className="font-medium">{item.name}</h3>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
