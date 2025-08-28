import React, { useState } from "react";
import Wishlist from "./Components/Wishlist";
import Cart from "./Components/Cart";

export default function App() {
  const [wishlist, setWishlist] = useState([
    { id: 1, name: "Dress", image: "/images/dress.jpg" },
    { id: 2, name: "Jacket", image: "/images/gacket.jpg" },
    { id: 3, name: "Pants", image: "/images/pant.jpg" },
  ]);

  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // 🔹 State للـ Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", image: "" });

  // 🔹 إضافة للسلة
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // 🔹 حذف من Wishlist
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  // 🔹 حذف من Cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // 🔹 دالة إضافة المنتج الجديد
  const handleAddProduct = () => {
    if (newProduct.name && newProduct.image) {
      const newItem = {
        id: Date.now(),
        ...newProduct,
      };
      setWishlist([...wishlist, newItem]);
      setNewProduct({ name: "", image: "" });
      setIsModalOpen(false);
    }
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } min-h-screen p-6`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Wishlist App</h1>
        <div className="flex gap-2">
          {/* زر إضافة عنصر */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
          >
            + Add Item
          </button>
          {/* زر تبديل الوضع الليلي */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
          >
            Toggle Dark Mode
          </button>
        </div>
      </div>

      {/* Wishlist + Cart */}
      <Wishlist
        products={wishlist}
        addToCart={addToCart}
        removeFromWishlist={removeFromWishlist}
      />
      <Cart cart={cart} removeFromCart={removeFromCart} />

      {/* 🔹 Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className={`${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            } p-6 rounded-lg shadow-lg w-96`}
          >
            <h2 className="text-xl font-semibold mb-4">Add New Product</h2>

            {/* Input name */}
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded text-black"
            />

            {/* Input image URL */}
            <input
              type="text"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded text-black"
            />

            {/* Actions */}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProduct}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
