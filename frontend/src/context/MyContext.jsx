import { Children, createContext, useEffect, useState } from "react";

export const MainContext = createContext();


export const MainProvider = ({ children }) => {
    const [showWishlist, setShowWishlist] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [query, setQuery] = useState('');

    const products = [
        {
            id: 1,
            name: "Classic Cotton T-Shirt",
            image: "https://www.prophotostudio.net/wp-content/uploads/2021/01/Lay-flat-shirt-front-green.jpg",
            price: 25.99,
            oldPrice: 39.99,
            discount: "-35% OFF",
            rating: 4.7,
            reviews: 180,
        },
        {
            id: 2,
            name: "Denim Jacket",
            image: "https://cdn.prod.website-files.com/6256995755a7ea0a3d8fbd11/645924d369c84c1e3dbda2ad_Frame%201.jpg",
            price: 49.99,
            oldPrice: 69.99,
            discount: "-28% OFF",
            rating: 4.6,
            reviews: 240,
        },
        {
            id: 3,
            name: "Women’s Floral Dress",
            image: "https://images.pexels.com/photos/17445013/pexels-photo-17445013/free-photo-of-blonde-woman-leaning-on-armchair.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            price: 59.99,
            oldPrice: 89.99,
            discount: "-33% OFF",
            rating: 4.9,
            reviews: 310,
        },
        {
            id: 4,
            name: "Leather Handbag",
            image: "https://i.pinimg.com/236x/84/94/c9/8494c954ec27b5558e1ca66b26f5ec35.jpg",
            price: 85.0,
            oldPrice: 120.0,
            discount: "-30% OFF",
            rating: 4.8,
            reviews: 150,
        },
        {
            id: 5,
            name: "Men’s Polo Shirt",
            image: "https://i.sstatic.net/CeCrU.jpg",
            price: 29.99,
            oldPrice: 42.99,
            discount: "-25% OFF",
            rating: 4.5,
            reviews: 90,
        },
        {
            id: 6,
            name: "Casual Sneakers",
            image: "https://target.scene7.com/is/image/Target/GUEST_181ea8a5-2324-4841-a385-54d6b9895eb1",
            price: 69.99,
            oldPrice: 99.99,
            discount: "-30% OFF",
            rating: 4.7,
            reviews: 220,
        },
        {
            id: 7,
            name: "Formal Office Blazer",
            image: "https://www.shutterstock.com/image-photo/confident-businesswoman-studio-modern-executive-600nw-2611127511.jpg",
            price: 119.99,
            oldPrice: 169.99,
            discount: "-29% OFF",
            rating: 4.9,
            reviews: 340,
        },
        {
            id: 8,
            name: "Luxury Sunglasses",
            image: "https://media.voguebusiness.com/photos/5ce3d84932029c6ded13e829/2:3/w_2560%2Cc_limit/online-product-may-19-article.jpg",
            price: 89.99,
            oldPrice: 139.99,
            discount: "-35% OFF",
            rating: 4.8,
            reviews: 275,
        },
    ];

    const handleSearch = () => {
        if(query == "") return []
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