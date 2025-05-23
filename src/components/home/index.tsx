import About from './components/About'
import Blog from './components/Blog'
import Factor from './components/Factor'
import Hero from './components/Hero'
import LatestsNews from './components/LatestsNews'
import Pricing from './components/Pricing'
import Review from './components/Review'
import Service from './components/Service'
import Testimonial from './components/Testimonial'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Service />
            <LatestsNews />
            <Blog />
            <Factor />
            <Pricing />
            <Testimonial />
            <Review />
        </>
    )
}

export default Home 