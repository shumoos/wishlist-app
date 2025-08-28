import React from "react";

export default function Wishlist({ products, addToCart, removeFromWishlist }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-3">Wishlist</h2>
      {products.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg shadow">
              <img
                src={item.image}
                alt={item.name}
                className="mb-2 w-full h-40 object-contain bg-white rounded"
              />
              <h3 className="font-medium">{item.name}</h3>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => addToCart(item)}
                  className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
