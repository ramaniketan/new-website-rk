import { Container } from 'react-bootstrap'
import hero2Img from '../../../assets/image/hero-img3.jpg'

const Hero = () => {
    return (
        <section className='hero'>
            <img src={hero2Img} alt="Hero" className='w-100' />
            <Container style={{ paddingTop: '120px' }}>
                <div className="hero-content">
                    <h1 className="hero-heading">Welcome to Our Website</h1>
                    <p className="hero-subheading">We offer the best services to help you grow.</p>
                </div>
            </Container>
        </section>

    )
}

export default Hero