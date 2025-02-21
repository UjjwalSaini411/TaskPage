import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FeaturedMedia from '../FeatureMedia/FeatureMedia';
import Blogs from '../Blogs/Blogs';
import TrendingNews from '../TrendingNews/TrendingNews';
import NewsList from '../NewsList/NewsList';
import './InfraMantra.css';
import HeroSection from '../HeroSection/Heroection';

const InfraMantra = () => {
    return (
        <>
            <HeroSection />
            <FeaturedMedia />
            
            <Container className="py-4">
                <Row>
                    <Col lg={8} md={12}>
                        <Blogs />
                    </Col>

                    <Col lg={4} md={12}>
                        <TrendingNews />
                        <NewsList />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default InfraMantra;
