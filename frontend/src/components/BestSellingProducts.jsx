import React, { useContext } from "react";
// import { MainContext } from "../context/MainContext";
// import ProductCard from "./ProductCard";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { MainContext } from "../context/MyContext";

// Custom Arrow Buttons
const PrevArrow = ({ className, onClick }) => (
    <button
        className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-blue-900 hover:text-white transition z-10"
        onClick={onClick}
    >
        <FiChevronLeft size={20} />
    </button>
);

const NextArrow = ({ className, onClick }) => (
    <button
        className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-blue-900 hover:text-white transition z-10"
        onClick={onClick}
    >
        <FiChevronRight size={20} />
    </button>
);

function BestSellingProducts() {
    const {products} = useContext(MainContext);

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: { slidesToShow: 4, slidesToScroll: 4 },
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 3 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],
    };

    return (
        <section className="bg-gray-50 py-14 relative">
            <div className="max-w-7xl container mx-auto px-6">
                <h2 className="text-center text-gray-800 text-2xl md:text-3xl font-bold uppercase tracking-wide mb-10 relative">
                    Best Selling Products
                    <span className="block w-20 h-1 bg-blue-900 mx-auto mt-3 rounded-full"></span>
                </h2>

                <div className="relative">
                    <Slider {...settings}>
                        {products && products.map((product) =>
                            <div className="px-2 group" key={product.id}>
                                <ProductCard product={product} />
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default BestSellingProducts;