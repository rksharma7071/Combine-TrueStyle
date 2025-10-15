import React, { useContext } from 'react'
import { IoClose } from "react-icons/io5";
import { MainContext } from '../context/MyContext';

function Wishlist({ showWishlist, setShowWishlist }) {
    const { wishlist, removeFromWishlist, addToCart } = useContext(MainContext);

    const onClose = () => {
        setShowWishlist(false);
    }
    return (
        <>
            <div
                className="fixed inset-0 bg-black/30 bg-opacity-30 z-40"
                onClick={onClose}
            ></div>
            <div className="fixed top-1/2 left-1/2 w-11/12 md:w-[500px] max-h-[80vh] overflow-y-auto bg-white rounded-lg shadow-xl transform -translate-x-1/2 -translate-y-1/2 z-50 p-5">
                <div className="flex justify-between items-center border-b border-gray-500 pb-3 mb-3">
                    <h2 className="text-xl font-semibold text-blue-900">Your Wishlist</h2>
                    <button onClick={onClose} className='hover:cursor-pointer'>
                        <IoClose className="text-2xl text-gray-500 hover:text-gray-700" />
                    </button>
                </div>

                {wishlist.length === 0 ? (
                    <p className="text-center text-gray-500 py-6">Your wishlist is empty 😔</p>
                ) : (
                    <div className="space-y-4">
                        {wishlist.map((item) => (
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
                                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                                        <p className="text-sm text-blue-900 font-semibold">${item.price}</p>
                                        <span className="inline-block text-sm p-1 px-2 bg-blue-100 rounded-full text-blue-900 font-semibold">{item.discount}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="bg-blue-900 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-800 transition"
                                    >Add to Cart</button>
                                    <button
                                        onClick={() => removeFromWishlist(item.id)}
                                        className=" text-red-500 hover:underline"
                                    ><IoClose /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Wishlist