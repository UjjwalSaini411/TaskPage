import React from "react";
import { Container, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./featuremedia.css";
import m1 from "../../assets/m1.png";
import m2 from "../../assets/m2.png";
import m3 from "../../assets/m3.png";
import m4 from "../../assets/m4.png";

const mediaData = [
  { title: "Noida Real Estate Market", description: "Prices more than double in last five years", img: m1 },
  { title: "Dwarka Expressway Boom", description: "Driving the real estate growth", img: m2 },
  { title: "RBI Monetary Policy", description: "How to get over your home loan quickly?", img: m3 },
  { title: "RBI Misses Opportunity", description: "To spur housing demand", img: m4 },
];

// Responsive settings for the carousel
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const FeaturedMedia = () => {
  return (
    <Container className="py-4 feature-container">
      <h3 className="mb-3 feature-head">
        <div className="feature-line"></div> Featured Media
      </h3>

      <Carousel
        responsive={responsive}
        infinite={false}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        arrows={false}
      >
        {mediaData.map((item, index) => (
          <Card key={index} className="media-card">
            <Card.Img variant="top" src={item.img} className="media-img" />
  
          </Card>
        ))}
      </Carousel>
    </Container>
  );
};

export default FeaturedMedia;
