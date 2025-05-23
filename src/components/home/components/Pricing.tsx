import { Container } from 'react-bootstrap'

const Pricing = () => {
    return (
        <section className='pricing'>
            <Container>
                <h2>Pricing</h2>


                <div className="pricing-table">
                    <div className="ptable-item">
                        <div className="ptable-single">
                            <div className="ptable-header">
                                <div className="ptable-title">
                                    <h3>Silver</h3>
                                </div>
                                <div className="ptable-price">
                                    <h3><small>$</small>99<span>/ M</span></h3>
                                </div>
                            </div>
                            <div className="ptable-body">
                                <div className="ptable-description">
                                    <ul>
                                        <li>Pure HTML &amp; CSS</li>
                                        <li>Responsive Design</li>
                                        <li>Well-commented Code</li>
                                        <li>Easy to Use</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ptable-footer">
                                <div className="ptable-action">
                                    <a href=''>Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ptable-item featured-item">
                        <div className="ptable-single">
                            <div className="ptable-header">
                                <div className="ptable-status">
                                    <span>Hot</span>
                                </div>
                                <div className="ptable-title">
                                    <h3>Gold</h3>
                                </div>
                                <div className="ptable-price">
                                    <h3><small>$</small>199<span>/ M</span></h3>
                                </div>
                            </div>
                            <div className="ptable-body">
                                <div className="ptable-description">
                                    <ul>
                                        <li>Pure HTML &amp; CSS</li>
                                        <li>Responsive Design</li>
                                        <li>Well-commented Code</li>
                                        <li>Easy to Use</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ptable-footer">
                                <div className="ptable-action">
                                    <a href=''>Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ptable-item">
                        <div className="ptable-single">
                            <div className="ptable-header">
                                <div className="ptable-title">
                                    <h3>Platinum</h3>
                                </div>
                                <div className="ptable-price">
                                    <h3><small>$</small>299<span>/ M</span></h3>
                                </div>
                            </div>
                            <div className="ptable-body">
                                <div className="ptable-description">
                                    <ul>
                                        <li>Pure HTML &amp; CSS</li>
                                        <li>Responsive Design</li>
                                        <li>Well-commented Code</li>
                                        <li>Easy to Use</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ptable-footer">
                                <div className="ptable-action">
                                    <a href=''>Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Pricing