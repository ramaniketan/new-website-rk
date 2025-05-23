import client1 from '@/assets/image/client-1.jpg'
import client2 from '@/assets/image/client-2.jpg'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
    return (
        <section className='about-us'>
            <h2>About Us</h2>
            <Container>
                <div className="about">
                    <Row>
                        <Col md={6} className='align-items-center'>
                            <h4>Introduction To The Best <br />

                                <span> Digital Agency </span> </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo omnis fuga sed fugit voluptatibus aliquam, eos possimus aliquid commodi velit quasi necessitatibus saepe impedit laborum beatae tempore facere sint rerum?</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero odit odio in minima exercitationem eaque</p>
                            <button className='btn-all'>About Us</button>
                        </Col>
                        <Col md={6} className='d-flex justify-content-end'>
                            <div data-aos="fade-left" className=" about-image-wrapper">
                                <div className="about-img1">
                                    <img src={client1} alt="client1" width={370} height={360} />
                                </div>
                                <div className="about-img2">
                                    <img src={client2} alt="client2" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default About