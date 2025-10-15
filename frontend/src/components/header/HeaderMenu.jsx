import React from 'react'
import { Link } from 'react-router-dom'

function HeaderMenu({menuOpen}) {
  return (
    <nav className="">
          <div className="max-w-7xl mx-auto px-4 py-2 hidden md:flex justify-center space-x-8 text-sm font-semibold text-gray-700">
            <Link to="/" className="hover:text-blue-600 transition-colors">Men</Link>
            <Link to="/" className="hover:text-blue-600 transition-colors">Women</Link>
            <Link to="/" className="hover:text-blue-600 transition-colors">Kids</Link>
            <Link to="/" className="hover:text-blue-600 transition-colors">Accessories</Link>
            <Link to="/" className="hover:text-blue-600 transition-colors">Footwear</Link>
            <Link to="/" className="hover:text-blue-600 transition-colors">Home & Living</Link>
            <Link to="/" className="hover:text-blue-600 transition-colors">Beauty</Link>
            <Link to="/" className="hover:text-blue-600 transition-colors">Sale</Link>
          </div>

          {menuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 shadow-inner">
              <div className="flex flex-col items-center py-3 space-y-3 text-sm font-semibold text-gray-700">
                <Link onClick={() => setMenuOpen(false)} to="/" className="hover:text-blue-600">Men</Link>
                <Link onClick={() => setMenuOpen(false)} to="/" className="hover:text-blue-600">Women</Link>
                <Link onClick={() => setMenuOpen(false)} to="/" className="hover:text-blue-600">Kids</Link>
                <Link onClick={() => setMenuOpen(false)} to="/" className="hover:text-blue-600">Accessories</Link>
                <Link onClick={() => setMenuOpen(false)} to="/" className="hover:text-blue-600">Footwear</Link>
                <Link onClick={() => setMenuOpen(false)} to="/" className="hover:text-blue-600">Home & Living</Link>
                <Link onClick={() => setMenuOpen(false)} to="/" className="hover:text-blue-600">Beauty</Link>
                <Link onClick={() => setMenuOpen(false)} to="/" className="hover:text-blue-600">Sale</Link>
              </div>
            </div>
          )}
        </nav>
  )
}

export default HeaderMenu