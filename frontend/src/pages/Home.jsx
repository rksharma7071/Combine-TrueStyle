import React from 'react'
import HeroSlider from '../components/HeroSlider'
import BestSellingProducts from '../components/BestSellingProducts'

function Home() {
    return (
        // <h1 className='text-red-500 text-2xl font-semibold'>Ecommerce website in react js</h1>
        <>
            <HeroSlider />
            <BestSellingProducts />
        </>
    )
}

export default Home