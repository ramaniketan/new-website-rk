import slide1 from '@/assets/image/slide/slide-1.jpeg'
import slide2 from '@/assets/image/slide/slide-2.jpeg'
import slide3 from '@/assets/image/slide/slide-3.jpeg'
import slide4 from '@/assets/image/slide/slide-4.jpeg'
import slide5 from '@/assets/image/slide/slide-5.jpeg'
import slide7 from '@/assets/image/slide/slide-7.jpeg'
import slide8 from '@/assets/image/slide/slide-8.jpeg'
import slide6 from '@/assets/image/slide/slided-6.jpeg'
import { Card } from 'react-bootstrap'
import Marquee from 'react-fast-marquee'

const Review = () => {
    const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];
    return (
        <section className='review'>
            <h2>Review</h2>
            <Marquee>
                {slides.map((slide, index) => (
                    <Card key={index} className="review-card">
                        <img src={slide} alt={`slide${index + 1}`} />
                        <Card.Body>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Card.Body>
                    </Card>
                ))}
            </Marquee>
        </section>
    )
}

export default Review