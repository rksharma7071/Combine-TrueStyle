import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { MainContext } from '../context/MyContext';
import { IoMdAdd } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function ProductCard({ product }) {
    const { addToCart, addToWishlist, wishlist } = useContext(MainContext);
    const [wishlistActive, setWishlistActive] = useState(false);
    const handleWishlist = (product) => {
        addToWishlist(product)
    }

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} className="text-blue-900" />);
        }

        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half" className="text-blue-900" />);
        }

        while (stars.length < 5) {
            stars.push(<FaRegStar key={`empty-${stars.length}`} className="text-blue-900" />);
        }

        return stars;
    };

    useEffect(() => {
        const active = wishlist.find((item) => item.id == product.id);
        setWishlistActive(active);
    })


    return (
        <Link
            to={"/"}
            className="relative block border border-gray-200 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
            <span className="absolute top-2 left-2 bg-red-100 text-red-500 text-xs font-semibold px-2 py-1 rounded-full z-10">{product.discount}</span>
            <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden bg-gray-50">
                <img
                    src={product.image}
                    alt="Stylish T-Shirt"
                    className="w-3/4 h-3/4 object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            {/* hidden group-hover: */}
            <div className='flex absolute top-2 right-2 size-6 justify-center items-center bg-red-100 text-white text-xs font-semibold p-1 rounded-full z-10 transform group-hover:scale-110 transition-transform duration-500' onClick={() => handleWishlist(product)}>
                {wishlistActive ?
                    <FaHeart className='text-red-500' /> :
                    <FaRegHeart className='text-red-500' />
                }
            </div>
            <div className="p-4 relative">
                <h3 className="text-gray-800 font-semibold text-sm md:text-base group-hover:text-blue-900 transition-colors duration-300">{product.name}</h3>
                <div className="flex items-center my-1 space-x-1">
                    {renderStars(product.rating)}
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-blue-900 font-bold text-lg">{product.price}</p>
                    <p className="text-gray-400 line-through text-sm">{product.oldPrice}</p>
                </div>

                <button
                    className="absolute -top-5 right-3 bg-blue-100 text-blue-900 p-2 rounded-full text-lg hover:bg-blue-800 hover:text-blue-100 transition-transform transform hover:scale-110 shadow-md"
                    onClick={() => addToCart(product)}
                ><IoMdAdd /></button>
            </div>
        </Link>
    )
}

export default ProductCard