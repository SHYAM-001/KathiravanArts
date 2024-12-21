import React from 'react'
import Carousel from '../components/Carousel'

const HomePage = () => {

    const carousels = [
        { img: "https://www.atxfinearts.com/cdn/shop/articles/What_Is_Value_In_Art_Analysis.webp?v=1715881984", href: "", id: 1, text: "Express your gifts in the form of Art", active: true },
        { img: "https://static.vecteezy.com/system/resources/thumbnails/024/699/637/small/ai-generated-ai-generative-realistic-illustration-of-human-eye-oil-draw-graphic-art-photo.jpg", href: "", id: 2, text: "", active: false },
        { img: "https://www.shutterstock.com/image-vector/artist-supply-color-illustration-visual-260nw-1544392190.jpg", href: "", id: 3, text: "", active: false },
        { img: "https://www.atxfinearts.com/cdn/shop/articles/Trends_In_The_Art_Market_-_What_To_Create_And_Sell_In_2024.webp?v=1717173651", href: "", id: 4, text: "", active: false },
        { img: "https://www.atxfinearts.com/cdn/shop/articles/Time_Management_Tips_For_Artists.webp?v=1716570350", href: "", id: 5, text: "", active: false },
    ]
    return (
        <>
            <Carousel carousels={ carousels } />
        </>
    )
}

export default HomePage