import { Card, Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { FaArtstation } from 'react-icons/fa'
import { FaAlgolia, FaDiceD20 } from 'react-icons/fa6'

const Service = () => {
    return (
        <section className='service'>
            <h2 className='mb-0'>Service</h2>
            <Container>
                <TabContainer defaultActiveKey='tab-1'>
                    <Nav>
                        <NavItem className='ms-0'>
                            <NavLink eventKey='tab-1'>
                                Tab 1
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey='tab-2'>
                                Tab 2
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey='tab-3'>
                                Tab 3
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent>
                        <TabPane eventKey='tab-1'>
                            <Row className='d-flex justify-content-center'>
                                <Col md={4}>
                                    <Card>
                                        <div className="service-icon">
                                            <FaAlgolia size={25} />
                                        </div>
                                        <h5>Web Design / IT Services</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam quos iure adipisci libero error? Molestias odit dolore corrupti</p>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card>
                                        <div className="service-icon">
                                            <FaArtstation size={25} />
                                        </div>
                                        <h5>Health & Wellness Services</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam quos iure adipisci libero error? Molestias odit dolore corrupti</p>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card>
                                        <div className="service-icon">
                                            <FaDiceD20 size={25} />
                                        </div>
                                        <h5>Real Estate Services</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam quos iure adipisci libero error? Molestias odit dolore corrupti</p>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane eventKey='tab-2'>
                            <Row className='d-flex justify-content-center'>
                                <Col md={4}>
                                    <Card>
                                        <div className="service-icon">
                                            <FaAlgolia size={25} />
                                        </div>
                                        <h5>Web Design / IT Services</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam quos iure adipisci libero error? Molestias odit dolore corrupti</p>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card>
                                        <div className="service-icon">
                                            <FaArtstation size={25} />
                                        </div>
                                        <h5>Health & Wellness Services</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam quos iure adipisci libero error? Molestias odit dolore corrupti</p>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane eventKey='tab-3'>3</TabPane>
                    </TabContent>
                </TabContainer>
            </Container>
        </section>
    )
}

export default Service