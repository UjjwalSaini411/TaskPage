import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import './NewsList.css';

const newsItems = [
  { id: 1, title: "Unsold Housing Stock Down 12% Across Nine Cities At End Of September Quarter", date: "Oct 2022 | 8 Mins Read" },
  { id: 2, title: "Best Cities In India For Real Estate Investment In 2024", date: "Oct 2022 | 8 Mins Read" },
  { id: 3, title: "Top 5 Real Estate Developers In Noida", date: "Aug 2024 | 8 Mins Read" },
  { id: 4, title: "Unsold Housing Stock Down 12% Again Across Nine Cities", date: "Oct 2022 | 8 Mins Read" },
  { id: 5, title: "Residential Sales Hit Record High Amidst Economic Boom", date: "Nov 2024 | 6 Mins Read" },
  { id: 6, title: "Why Home Loan Interest Rates Matter More Than Ever", date: "Dec 2023 | 5 Mins Read" },
  { id: 7, title: "Luxury Housing Market Surges In 2024", date: "Jan 2024 | 7 Mins Read" },
  { id: 8, title: "Top Cities With The Highest Property Appreciation Rates", date: "Feb 2024 | 6 Mins Read" },
];

const NewsList = () => {
  return (
    <Container className="py-4 news-container-div">
      <h3 className=" news-title">
        <div className="news-line"></div> News
      </h3>
      <div className="news-container">
        <ListGroup>
          {newsItems.map((news, index) => (
            <ListGroup.Item key={index} className="news-item">
              <div className="news-content">
              <span className={`news-number ${index === 1 ? 'highlight' : ''}`}>#{news.id}</span>
                <span className="news-text">{news.title}</span>
              </div>
                <small className="news-meta">{news.date}</small>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Container>
  );
};

export default NewsList;
