import React, { useContext } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { MainContext } from '../../context/MyContext';
import { Link } from 'react-router-dom';

function SearchMobile({ searchOpen }) {
    const { query, setQuery, handleSearch } = useContext(MainContext);
    const filterProduct = handleSearch();

    return (
        <>
            {searchOpen && (
                <div
                    className={`md:hidden transition-all duration-300 overflow-hidden ${
                        searchOpen ? "max-h-[500px] p-2 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="flex items-center w-full border border-gray-300 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400 transition-all">
                        <input
                            type="search"
                            placeholder="Find the latest trends in fashion…"
                            className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <IoIosSearch className="size-5 text-gray-500 hover:text-blue-600 cursor-pointer transition-colors" />
                    </div>

                    {filterProduct?.length > 0 && (
                        <div className="mt-1 border border-gray-300 bg-white shadow-lg rounded-md overflow-hidden max-h-60 overflow-y-auto">
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
            )}
        </>
    );
}

export default SearchMobile;
