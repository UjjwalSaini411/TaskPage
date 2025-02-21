import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Blogs.css';
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';
import blog4 from '../../assets/blog4.png';

const blogData = [
  { title: "Unsold Housing Stock Down 12% Across Nine Cities At End Of September Quarter", date: "Nov 2024", time: "8 Mins Read", img: blog1 },
  { title: "International Women’s Day Special – Rise Of Women In The Real Estate Sector", date: "Oct 2024", time: "6 Mins Read", img: blog2 },
  { title: "Top 5 Real Estate Developers In Noida", date: "Aug 2024", time: "8 Mins Read", img: blog3 },
  { title: "Best Cities In India For The Real Estate Investment In 2024", date: "Oct 2022", time: "8 Mins Read", img: blog4 },
];

const Blogs = () => {
  return (
    <Container className="py-4 blob-container">
      <h3 className="mb-3 section-title blog-title"><div className="blog-line"></div> Blogs</h3>
      <Row>
        {blogData.map((blog, index) => (
          <Col md={12} key={index} className="mb-3">
            <Card className="blog-card">
              <Row className="g-0">
                <Col md={4} className='blog-img-holder'>
                  <Card.Img src={blog.img} className="blog-img" />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title className="blog-title">{blog.title}</Card.Title>
                    <Card.Text className="blog-meta">{blog.date} | {blog.time}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blogs;
