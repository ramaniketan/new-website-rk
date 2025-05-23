import { Card, Col, Container, Row } from 'react-bootstrap'
import { FaAlignJustify } from 'react-icons/fa'

const Testimonial = () => {
    return (
        <section className='testimonial'>
            <Container>
                <h2>Testimonial</h2>
                <p>We grow when you do — that’s why your success is always our top priority.</p>
                <div className="testimonial-menu">
                    <Row>
                        <Col md={4}>
                            <Card >
                                <div className="card-icon">
                                    <FaAlignJustify size={20} />
                                </div>
                                <h3>Market Research</h3>
                                <p>Lorem ipsum, dolor sit amet <br />
                                    consectetur adipisicing elit.</p>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card >
                                <div className="card-icon">
                                    <FaAlignJustify size={20} />
                                </div>
                                <h3>Market Research</h3>
                                <p>Lorem ipsum, dolor sit amet <br />
                                    consectetur adipisicing elit.</p>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card >
                                <div className="card-icon">
                                    <FaAlignJustify size={20} />
                                </div>
                                <h3>Market Research</h3>
                                <p>Lorem ipsum, dolor sit amet <br />
                                    consectetur adipisicing elit.</p>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </Container>
        </section>
    )
}

export default Testimonial