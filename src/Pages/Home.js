import React, { Component } from 'react'
import CarouselBox from "../Components/CarouselBox";
import { Container, Button, Card, Row, Col} from 'react-bootstrap';
import card1 from "../assets/cards/card1.jpg";
import card2 from "../assets/cards/card2.jpg";
import card3 from "../assets/cards/card3.jpg";
import { Link } from "react-router-dom";


export default class Home extends Component {
  render() {
    return (
      <>
      <CarouselBox />

      <Container>
        <h2 className='text-center m-4'>Our Team</h2>
        <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
            variant='top'
            src={card1}
            />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>Our developers are skilled professionals passionate about technology and innovation. They excel in writing clean, efficient, and scalable code while staying ahead of industry trends. With expertise in various programming languages, frameworks, and libraries, they build robust solutions tailored to business needs.</Card.Text>
              <Button as={Link} to="/about" variant="primary">About Team</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col md={4} className="mb-4">
          <Card>
            <Card.Img
            variant='top'
            src={card2}
            />
            <Card.Body>
              <Card.Title>UI/UX Designers</Card.Title>
              <Card.Text>Our UI/UX designers craft visually stunning and highly intuitive interfaces. They focus on user behavior, accessibility, and seamless interaction to create engaging digital experiences. By combining aesthetics with functionality, they ensure every design enhances usability and aligns with business goals.</Card.Text>
              <Button as={Link} to="/about" variant="primary">About Team</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col md={4} className="mb-4">
          <Card>
            <Card.Img
            variant='top'
            src={card3}
            />
            <Card.Body>
              <Card.Title>QA Engineers</Card.Title>
              <Card.Text>Our QA engineers ensure the highest quality and reliability of our products. Through rigorous testing, automation, and attention to detail, they identify and resolve issues early. Their goal is to deliver flawless, secure, and high-performance solutions that exceed user expectations, they ensure every qa enhances usability and aligns with business goals.</Card.Text>
              <Button as={Link} to="/about" variant="primary">About Team</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
      </>
    )
  }
}
