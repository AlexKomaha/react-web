import React, { Component } from 'react'
import { Figure, Container, Col, Row, ListGroup, Card, CardBody, CardTitle, CardText } from "react-bootstrap";
import js from "../assets/blog/js.png";
import python from "../assets/blog/python.png";
import ruby from "../assets/blog/ruby.png";
import php from "../assets/blog/php.png";

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
          <Figure className="m-5 d-flex align-items-start">
            <Figure.Image
            width={150}
            height={150}
            src={js}
            />
            <Figure.Caption className="ms-3">
              <h5>JavaScript</h5>
              <p>JavaScript is at the core of our development process, enabling dynamic, interactive, and high-performance web applications. We leverage modern JS frameworks and libraries to build scalable, responsive, and seamless user experiences across all platforms.</p>
            </Figure.Caption>
          </Figure>
          <Figure className="m-5 d-flex align-items-start">
            <Figure.Image
            width={150}
            height={150}
            src={python}
            />
            <Figure.Caption className="ms-3">
              <h5>Python</h5>
              <p>Python powers our development with its versatility, efficiency, and scalability. From web applications to AI-driven solutions, we utilize its robust frameworks and libraries to create secure, high-performance, and innovative digital products tailored to business needs.</p>
            </Figure.Caption>
          </Figure>
          <Figure className="m-5 d-flex align-items-start">
            <Figure.Image
            width={150}
            height={150}
            src={ruby}
            />
            <Figure.Caption className="ms-3">
              <h5>Ruby</h5>
              <p>Ruby enables us to build elegant, scalable, and maintainable applications. With its clean syntax and powerful frameworks like Ruby on Rails, we develop high-performance web solutions that prioritize efficiency, security, and seamless user experiences.</p>
            </Figure.Caption>
          </Figure>
          <Figure className="m-5 d-flex align-items-start">
            <Figure.Image
            width={150}
            height={150}
            src={php}
            />
            <Figure.Caption className="ms-3">
              <h5>PHP</h5>
              <p>PHP is a reliable and flexible solution for web development. We use it to build secure, high-performance websites and applications, leveraging frameworks like Laravel and Symfony to ensure scalability, maintainability, and seamless functionality.</p>
            </Figure.Caption>
          </Figure>
          </Col>
          <Col md="3">
          <h5 className='text-center mt-5'>Gategories</h5>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>Html/CSS</ListGroup.Item>
              <ListGroup.Item>JavaScript</ListGroup.Item>
              <ListGroup.Item>Python</ListGroup.Item>
              <ListGroup.Item>Ruby</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card className='mt-3' bg="light">
            <CardBody>
              <CardTitle>Side widget</CardTitle>
              <CardText>These languages are at the heart of modern web and application development. HTML and CSS lay the foundation for structure and design, while JavaScript adds interactivity and dynamic features. Python offers versatility and efficiency for backend development, data analysis, and automation, while Ruby, known for its elegant syntax, powers rapid development of scalable web applications. Together, these languages allow us to create powerful, responsive, and user-centric digital solutions tailored to any project requirement.</CardText>
            </CardBody>
          </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
