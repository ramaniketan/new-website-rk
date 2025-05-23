import { Col, Container, Row } from 'react-bootstrap';
import img2 from '../../../assets/image/her-img2.jpg';

const LatestNews = () => {
  return (
    <section className="news-section">
      <Container>
        <h2>Latest News</h2>
        <div className="news">
          <Row>
            <Col md={6} className='d-flex justify-content-center align-items-center'>
              <img  data-aos="fade-right" className="news-img img-fluid" src={img2} alt="Latest News Visual" />
            </Col>
            <Col md={6}>
              <div className="news-details">
                <h4>Our Breaking News</h4>
                <ul>
                  <li>Excepturi ducimus ad. In delectus odit, distinctio ad, error nisi perspiciatis.</li>
                  <li>Excepturi ducimus ad. In delectus odit, distinctio ad, error nisi perspiciatis.</li>
                  <li>Excepturi ducimus ad. In delectus odit, distinctio ad, error nisi perspiciatis.</li>
                  <li>Excepturi ducimus ad. In delectus odit, distinctio ad, error nisi perspiciatis.</li>
                </ul>
                <Row className="g-4">
                  <Col className='col me-3' md={5}>News</Col>
                  <Col className='col me-3' md={5}>News</Col>
                  <Col className='col me-3' md={5}>News</Col>
                  <Col className='col me-3' md={5}>News</Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default LatestNews;
