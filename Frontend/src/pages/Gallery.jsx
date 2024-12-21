import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faXmark } from '@fortawesome/free-solid-svg-icons';  // Import necessary icons

const Gallery = () => {
    const carousels = [
        { img: "https://www.atxfinearts.com/cdn/shop/articles/What_Is_Value_In_Art_Analysis.webp?v=1715881984", href: "", id: 1, text: "Express your gifts in the form of Art", active: true },
        { img: "https://static.vecteezy.com/system/resources/thumbnails/024/699/637/small/ai-generated-ai-generative-realistic-illustration-of-human-eye-oil-draw-graphic-art-photo.jpg", href: "", id: 2, text: "", active: false },
        { img: "https://www.shutterstock.com/image-vector/artist-supply-color-illustration-visual-260nw-1544392190.jpg", href: "", id: 3, text: "", active: false },
        { img: "https://www.atxfinearts.com/cdn/shop/articles/Trends_In_The_Art_Market_-_What_To_Create_And_Sell_In_2024.webp?v=1717173651", href: "", id: 4, text: "", active: false },
        { img: "https://www.atxfinearts.com/cdn/shop/articles/Time_Management_Tips_For_Artists.webp?v=1716570350", href: "", id: 5, text: "", active: false },
    ];

    const gallery = [
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg", text: "Artistic Inspiration", id: 1 },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg", text: "Creative Flow", id: 2 },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg", text: "Masterpieces in Progress", id: 3 },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg", text: "Abstract Art", id: 4 },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg", text: "Color Explosion", id: 5 },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg", text: "Textures & Shapes", id: 6 },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg", text: "Innovation in Art", id: 7 },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg", text: "Artistic Reflections", id: 8 },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg", text: "Digital Art Innovations", id: 9 },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg", text: "Paint & Brush Strokes", id: 10 },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg", text: "The Abstract View", id: 11 },
        { img: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg", text: "Surreal Art", id: 12 },
    ];

    // Modal state
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Open the modal and set the image
    const openModal = (index) => {
        setCurrentImageIndex(index);
        setModalIsOpen(true);
    };

    // Close the modal
    const closeModal = () => {
        setModalIsOpen(false);
    };

    // Handle next and previous image navigation
    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    };

    const goToPreviousImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + gallery.length) % gallery.length
        );
    };

    return (
        <>
            <Carousel carousels={ carousels } />

            {/* Gallery Grid */ }
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6 bg-white">
                { gallery.map((item, index) => (
                    <div
                        key={ item.id }
                        className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
                        onClick={ () => openModal(index) }
                    >
                        <img
                            className="object-cover w-full h-60 sm:h-64 md:h-72 lg:h-80 transition-transform duration-500 group-hover:scale-110"
                            src={ item.img }
                            alt={ item.text }
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-300">
                                { item.text }
                            </p>
                        </div>
                    </div>
                )) }
            </div>

            {/* Modal for Fullscreen Image */ }
            { modalIsOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center">
                    <div className="relative bg-white p-4 h-[500px] rounded-lg max-w-4xl w-full">
                        <button
                            onClick={ closeModal }
                            className="absolute top-0 right-0 m-4 text-pink-500 text-2xl font-bold transform hover:rotate-180 transition-transform duration-300"
                        >
                            <FontAwesomeIcon icon={ faXmark } size="2xl" />
                        </button>
                        <div className="flex items-center h-full justify-between">
                            <button
                                onClick={ goToPreviousImage }
                                className="text-blue-500 text-2xl font-bold"
                            >
                                <FontAwesomeIcon icon={ faCaretLeft } size="2xl" />
                            </button>
                            <img
                                className="object-cover w-full max-h-96 rounded-lg"
                                src={ gallery[currentImageIndex].img }
                                alt={ gallery[currentImageIndex].text }
                            />
                            <button
                                onClick={ goToNextImage }
                                className="text-blue-500 text-2xl font-bold"
                            >
                                <FontAwesomeIcon icon={ faCaretRight } size="2xl" />
                            </button>
                        </div>
                        <div className="-mt-6 text-center">
                            <p className="text-black text-xl font-semibold">{ gallery[currentImageIndex].text }</p>
                        </div>
                    </div>
                </div>
            ) }
        </>
    );
};

export default Gallery;
