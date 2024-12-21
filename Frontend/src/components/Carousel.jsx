import React, { useState, useEffect } from 'react';

const Carousel = ({ carousels }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carousel = [
        { img: "https://www.atxfinearts.com/cdn/shop/articles/What_Is_Value_In_Art_Analysis.webp?v=1715881984", href: "", id: 1, text: "Express your gifts in the form of Art", active: true },];

    // Check if the carousels prop is passed
    if (carousels === undefined) {
        carousels = carousel;
    }


    // Function to move to the next slide
    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % carousels.length);
    };

    // Function to move to the previous slide
    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + carousels.length) % carousels.length);
    };

    // Automatic slide change every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [activeIndex]); // Dependency on activeIndex

    return (
        <div id="indicators-carousel" className="relative w-full h-full" data-carousel="static">
            <div className="relative h-[500px] md:h-[650px] overflow-hidden">
                { carousels.map((item, index) => (
                    <div
                        key={ item.id }
                        className={ `absolute w-full h-full transition-opacity duration-1000 ease-in-out ${activeIndex === index ? 'opacity-100' : 'opacity-0'}` }
                        data-carousel-item={ activeIndex === index ? 'active' : '' }
                    >
                        <img
                            src={ item.img }
                            className="absolute block w-full h-full object-cover"
                            alt={ item.text || 'Carousel Image' }
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full p-4">
                            <h2 className="text-4xl md:text-6xl font-bold text-white shadow-lg transition-all duration-700 ease-in-out opacity-100 transform transition-transform">
                                { item.text }
                            </h2>
                        </div>
                    </div>
                )) }
            </div>

            {/* Carousel Controls */ }
            <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                { carousels.map((_, index) => (
                    <button
                        key={ index }
                        type="button"
                        className={ `w-3 h-3 rounded-full ${activeIndex === index ? 'bg-blue-500' : 'bg-gray-300'}` }
                        aria-current={ activeIndex === index ? 'true' : 'false' }
                        aria-label={ `Slide ${index + 1}` }
                        onClick={ () => setActiveIndex(index) }
                    ></button>
                )) }
            </div>

            {/* Prev Button */ }
            <button
                type="button"
                className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2"
                onClick={ prevSlide }
                data-carousel-prev
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            {/* Next Button */ }
            <button
                type="button"
                className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2"
                onClick={ nextSlide }
                data-carousel-next
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carousel;
