import React, { useContext } from 'react'
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { MainContext } from '../../context/MyContext';
import { useNavigate } from 'react-router-dom';

function HeaderMenuIcon({ setShowCart, searchOpen, setSearchOpen, showWishlist, setShowWishlist, cartItems, wishlist }) {
    const navigate = useNavigate();


    return (
        <div className="col-span-6 md:col-span-4 flex justify-end items-center space-x-6 text-gray-900">
            <button className="hover:text-gray-700 transition-colors"  onClick={()=> navigate('/account')}><FaUser /></button>
            <button className="relative hover:text-gray-700 transition-colors" onClick={() => setShowWishlist(!showWishlist)}><FaHeart />
                {wishlist.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                        {wishlist.length}
                    </span>
                )}</button>
            <button className="hover:text-gray-700 transition-colors md:hidden" onClick={() => setSearchOpen(!searchOpen)}><FaSearch /></button>
            <button className="relative hover:text-gray-700 transition-colors" onClick={() => setShowCart(true)}>
                <FaShoppingCart />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">{cartItems.length}</span>
            </button>
        </div>
    )
}

export default HeaderMenuIcon