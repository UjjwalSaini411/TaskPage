import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import topmg from '../../assets/topimg.jpg';
import righta from '../../assets/righta.svg';
import './hero.css';

const stories = [
  { id: 2, text: "Top 5 Places To Live In Gurugram" },
  { id: 3, text: "Housing Sales, New Launches In Top Cities Register Massive Jump In Q3 2022" },
  { id: 4, text: "Festive Season Sales To Hold Up Real Estate Market" }
];

const HeroSection = () => {
  return (
    <section className="hero">
      <Container>
        <Row>
          <Col lg={12}>
            <Card className="border-0">
              <Card.Img className='top-img' src={topmg} alt="Hero Image" />

              <Card.ImgOverlay className="banner-overlay d-flex flex-column justify-content-start text-white">
                <h2 className='banner-text'>RBI rate hike: Home loans to get dearer, impact on residential sales to be moderate</h2>
                <p className='banner-p'>
                  <span className='img-hold dflex'>
                    <img src={righta} alt="arrow" />
                  </span>
                  Read
                </p>
              </Card.ImgOverlay>

              <Card.ImgOverlay className="blackish d-flex flex-column justify-content-center">
                <Row md={12} className="text-white other-story">Other Stories</Row>
                <Row className="story-rows">
                  {stories.map((story) => (
                    // <Col  md={4}>
                      <div className="story-card" >
                        <span className="story-number">{story.id}</span>
                        <p className="story-text">{story.text}</p>
                      </div>
                    // </Col>
                  ))}
                </Row>
              </Card.ImgOverlay>

            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
