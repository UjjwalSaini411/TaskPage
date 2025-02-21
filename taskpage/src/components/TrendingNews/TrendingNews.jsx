import React from 'react';
import { Container, Card, Carousel } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './TredingNews.css';

const trendingNewsData = [
  {
    title: "Mumbai Property Registrations Double For The First Time Since 2019",
    source: "Financial Express",
    description: "Mumbai saw an average quarterly value of registered properties at Rs 44,520 crore in the first half of the current year, which is the highest in the past five years.",
    date: "Lorem Ipsum | Sanjeev Sinha | Sept 2022",
  },
  {
    title: "Real Estate Market Sees Unprecedented Growth",
    source: "Economic Times",
    description: "The real estate market is witnessing significant growth due to increasing investments and urban development across key metropolitan areas.",
    date: "John Doe | July 2023",
  },
  {
    title: "Housing Sector Expands Rapidly In 2024",
    source: "MoneyControl",
    description: "The housing sector has seen exponential growth in 2024, with government policies boosting infrastructure development.",
    date: "Jane Smith | August 2024",
  },
];

const TrendingNews = () => {
  return (
    <Container className="py-4 trending-container">
      <h3 className="mb-3 trending-title">Trending News</h3>
      <Carousel
        indicators={true}
        controls={true}
        nextIcon={<FaChevronRight className="custom-arrow right-arrow" />}
        prevIcon={<FaChevronLeft className="custom-arrow left-arrow" />}
      >
        {trendingNewsData.map((news, index) => (
          <Carousel.Item key={index} className='trending-carousel'>
            <Card className="trending-card">
              <Card.Body>
                <h5 className="news-source">{news.source}</h5>
                <Card.Title className="trending-titlet">{news.title}</Card.Title>
                <Card.Text className="trending-description">{news.description}</Card.Text>
                <Card.Text className="trending-date">{news.date}</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default TrendingNews;
