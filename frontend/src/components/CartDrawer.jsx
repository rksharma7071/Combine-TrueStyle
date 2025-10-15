import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { MainContext } from "../context/MyContext";


function CartDrawer() {
    const { cartItems, removeFromCart, showCart, setShowCart, setCartItems } = useContext(MainContext);

    return (
        <>
            <div
                onClick={() => setShowCart(false)}
                className={`fixed inset-0 bg-black/30 bg-opacity-30 transition-opacity duration-300 z-40 ${showCart ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            ></div>

            <div
                className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        ${showCart ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-300">
                    <h2 className="text-lg font-semibold text-blue-900">Your Cart</h2>
                    <button
                        onClick={() => setShowCart(false)}
                        className="text-gray-600 hover:text-red-500"
                    >
                        <IoClose className="text-2xl" />
                    </button>
                </div>

                <div className="p-4 overflow-y-auto max-h-[calc(100vh-160px)]">
                    {cartItems.length === 0 ? (
                        <p className="text-center text-gray-500 py-10">
                            Your cart is empty 🛍️
                        </p>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between border-b border-gray-300 pb-3"
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <div>
                                            <h3 className="font-medium text-gray-800 text-sm">
                                                {item.name}
                                            </h3>
                                            <p className="text-blue-900 font-semibold text-sm">
                                                ${item.price}
                                            </p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <button
                                                    onClick={() =>
                                                        item.quantity > 1 &&
                                                        setCartItems((prev) =>
                                                            prev.map((cartItem) =>
                                                                cartItem.id === item.id
                                                                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                                                                    : cartItem
                                                            )
                                                        )
                                                    }
                                                    className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-200 text-sm"
                                                >
                                                    −
                                                </button>

                                                <span className="text-sm text-gray-700 min-w-[20px] text-center">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    onClick={() =>
                                                        setCartItems((prev) =>
                                                            prev.map((cartItem) =>
                                                                cartItem.id === item.id
                                                                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                                                                    : cartItem
                                                            )
                                                        )
                                                    }
                                                    className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-200 text-sm"
                                                >
                                                    +
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-xs text-red-500 hover:underline"
                                    >
                                        <IoClose />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-300 p-4">
                        <p className="text-sm text-gray-600 mb-3">
                            Total:{" "}
                            <span className="font-semibold text-blue-900">
                                $
                                {cartItems
                                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                                    .toFixed(2)}
                            </span>
                        </p>
                        <button className="w-full bg-blue-900 text-white py-2 rounded-full hover:bg-blue-800 transition">
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default CartDrawer;
