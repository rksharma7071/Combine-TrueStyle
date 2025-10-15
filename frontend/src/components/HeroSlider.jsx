import React from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

// Custom Arrow Buttons
const PrevArrow = ({ className, onClick }) => (
    <button
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-blue-900 hover:text-white transition z-10"
        onClick={onClick}
    >
        <FiChevronLeft size={20} />
    </button>
);

const NextArrow = ({ className, onClick }) => (
    <button
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-blue-900 hover:text-white transition z-10"
        onClick={onClick}
    >
        <FiChevronRight size={20} />
    </button>
);

function HeroSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        fade: true,
        cssEase: 'ease-in-out',
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    const slides = [
        {
            id: 1,
            title: "New Arrivals",
            subtitle: "Shop the latest trends",
            image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/11/b4YhDJT5_7214b1611d794502a26a65a5e13ec18e.jpg",
            buttonText: "Shop Now",
            buttonLink: "/"
        },
        {
            id: 2,
            title: "Summer Sale",
            subtitle: "Up to 50% off selected items",
            image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/11/3gEIykjY_60b52aa064bd4372897524990f473873.jpg",
            buttonText: "Explore Deals",
            buttonLink: "/"
        },
        {
            id: 3,
            title: "Exclusive Collection",
            subtitle: "Premium quality just for you",
            image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/a606c305-a23f-4fe3-a630-343ced4a10261649782019470-Kids-Wear_Desk_Banner.jpg?v1    ",
            buttonText: "Discover",
            buttonLink: "/"
        },
    ];

    return (
        <div className="">
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.id} className="relative">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full object-contain md:object-cover"
                            loading="lazy"
                        />

                        <div className="absolute inset-0 bg-black/10"></div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                {slide.title}
                            </h2>
                            <p className="text-lg md:text-2xl mb-6">{slide.subtitle}</p>
                            
                            <Link to={'/'}
                                className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-dark hover:shadow-lg transition-all duration-300 ease-in-out"
                            >
                                {slide.buttonText}
                            </Link>

                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default HeroSlider;
