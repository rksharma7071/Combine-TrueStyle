import React, { useContext } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { MainContext } from '../../context/MyContext'
import { Link } from 'react-router-dom';

function SearchDesktop() {
    const { query, setQuery, handleSearch } = useContext(MainContext);
    const filterProduct = handleSearch();

    return (
        <div className="relative hidden md:col-span-6 md:flex">
            <div className="flex items-center w-full border border-gray-300 rounded-sm px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400 transition-all">
                <input
                    type="search"
                    placeholder="Find the latest trends in fashion…"
                    className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
                    onChange={(e) => {
                        setQuery(e.target.value)
                        handleSearch(query)
                        console.log()
                    }}
                />
                <IoIosSearch className="size-5 text-gray-500 hover:text-blue-600 cursor-pointer transition-colors" />
            </div>
            {filterProduct?.length > 0 && (
                <div className="absolute top-full left-0 w-full mt-1 border border-gray-300 bg-white shadow-lg rounded-md z-50 overflow-hidden max-h-60 overflow-y-auto">
                    {filterProduct.slice(0, 5).map((product) => (
                        <Link
                            to={`/products/${product.slug}`}
                            key={product.id}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors"
                            onClick={() => setQuery('')}
                        >
                            {product.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchDesktop