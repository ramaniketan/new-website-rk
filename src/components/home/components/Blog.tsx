import blog1 from '@/assets/image/blog/blog-1.jpg'
import blog2 from '@/assets/image/blog/blog-2.jpg'
import blog3 from '@/assets/image/blog/blog-3.jpg'
import blog4 from '@/assets/image/blog/blog-4.jpg'
import blog5 from '@/assets/image/blog/blog-5.jpg'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from 'react-bootstrap'


const Testimonials = () => {
    return (
        <section>
            <Container>
                <h2>Blog</h2>
                <div className="testimonials">
                    <Swiper
                        slidesPerView={4}
                        loop={true}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={blog1} alt="blog1" /> </SwiperSlide>
                        <SwiperSlide><img src={blog2} alt="blog2" /> </SwiperSlide>
                        <SwiperSlide><img src={blog3} alt="blog3" /> </SwiperSlide>
                        <SwiperSlide><img src={blog4} alt="blog4" /> </SwiperSlide>
                        <SwiperSlide><img src={blog5} alt="blog5" /> </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </section>
    )
}

export default Testimonials