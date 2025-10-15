import { Children, createContext, useEffect, useState } from "react";
import axios from "axios";
export const MainContext = createContext();


export const MainProvider = ({ children }) => {
    const [showWishlist, setShowWishlist] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API}/products`);
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);
    const handleSearch = () => {
        if (query == "") return []
        const filterProduct = products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        )
        return filterProduct;
    }

    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    });


    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem("wishlist");
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };
    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };
    const addToWishlist = (product) => {
        setWishlist((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (!exists) return [...prev, product];
            return prev;
        });
    };
    const removeFromWishlist = (id) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    return (
        <MainContext.Provider value={{
            products,
            cartItems,
            setCartItems,
            wishlist,
            setWishlist,
            addToCart,
            removeFromCart,
            addToWishlist,
            removeFromWishlist,
            showWishlist,
            setShowWishlist,
            showCart,
            setShowCart,
            query,
            setQuery,
            handleSearch
        }}>
            {children}
        </MainContext.Provider>
    )
}