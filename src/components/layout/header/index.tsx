import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdSend } from 'react-icons/md'
import logo from '@/assets/image/LOGO.png'

type childrenType = { children: React.ReactNode }

const Layouts = ({ children }: childrenType) => {
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <Navbar expand="lg" className={`header shadow-sm ${isSticky ? 'sticky' : ''}`}>
                <Container>
                    <div className='header-main'>
                        <Navbar.Brand href="/"><img src={logo} alt="Logo" height="40" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="main-navbar" />
                        <Navbar.Collapse id="main-navbar" className="justify-content-between">
                            <Nav className="mx-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/services">Services</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                            </Nav>
                            <Button className='btn-all' variant="outline-primary" href="/login">
                                Login
                            </Button>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
            {children}
            <section className="cta-wrapper">
                <Container>
                    <div className="cta-box">
                        <div>
                            <h2>Ready to Get Started?</h2>
                            <p className="mb-4">Join us today and experience the difference!</p>
                        </div>
                        <div className="cta-form">
                            <input type="email" id="cta-email" placeholder="Enter your email" />
                            <button className="send-btn">
                                <MdSend />
                            </button>
                        </div>
                    </div>
                </Container>
            </section>



            <footer className="footer">
                <Container>
                    <Row >
                        {/* Logo & Description */}
                        <Col md={4}>
                            <div className="footer-logo mb-3">
                                <img src={logo} className='img-fluid' alt="Logo" height="40" />
                            </div>
                            <p>The Next-Level Solutions for Landing Pages. Perfect Touch Enhances your Business.</p>
                            <div className="footer-social mt-3">
                                <a href="#"><FaFacebookF /></a>
                                <a href="#"><FaXTwitter /></a>
                                <a href="#"><FaLinkedinIn /></a>
                                <a href="#"><FaGithub /></a>
                            </div>
                        </Col>

                        {/* Useful Links */}
                        <Col md={4} className='text-center'>
                            <h5>Useful Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </Col>

                        {/* Product Help */}
                        <Col md={4} className='text-center'>
                            <h5>Product Help</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </Col>
                    </Row>

                    <hr />
                    <div className="text-center py-2">
                        <span>© 2020–2025 sApp | All rights reserved.</span>
                        {/* <span>Made with <span style={{ color: 'red' }}>❤</span> By <a href="#" className="text-purple">Themeland</a></span> */}
                    </div>
                </Container>
            </footer>


        </>
    )
}

export default Layouts
