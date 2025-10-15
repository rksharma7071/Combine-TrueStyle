import React, { useContext, useState } from "react";
import { FaUser, FaShoppingCart, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import SearchMobile from "./SearchMobile";
import SearchDesktop from "./SearchDesktop";
import HeaderMenuIcon from "./HeaderMenuIcon";
import { MainContext } from "../../context/MyContext";
import Wishlist from "../Wishlist";
import CartDrawer from "../CartDrawer";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { showWishlist, setShowWishlist, wishlist, cartItems, showCart, setShowCart, removeFromCart } = useContext(MainContext);

  return (
    <>
      <header className="w-full bg-white shadow-sm">

        <div className="text-center bg-blue-900 text-white text-sm py-2">Your favorite products are now <b>up to 50% off</b> — shop before the sale ends!</div>
        <div className="max-w-7xl mx-auto grid grid-cols-12 items-center gap-4 py-3 px-4">
          <div className="col-span-6 md:col-span-2 flex items-center justify-between">
            <button className="md:hidden text-blue-900 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <Link to={'/'} className="text-2xl font-bold text-blue-900 tracking-tight">TrueStyle</Link>
          </div>

          <SearchDesktop />

          <HeaderMenuIcon
            setShowCart={setShowCart}
            cartItems={cartItems}
            wishlist={wishlist}
            searchOpen={searchOpen}
            setSearchOpen={setSearchOpen}
            showWishlist={showWishlist}
            setShowWishlist={setShowWishlist}
          />
        </div>
        <SearchMobile searchOpen={searchOpen} />
        <HeaderMenu menuOpen={menuOpen} />

      </header>
      {showWishlist &&
        <Wishlist showWishlist={showWishlist} setShowWishlist={setShowWishlist} />
      }
      {showCart &&
        <CartDrawer cartItems={cartItems} removeFromCart={removeFromCart} showCart={showCart} setShowCart={setShowCart} />
      }
    </>
  );
}

export default Header;
