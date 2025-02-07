import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel";
import forestImg from "../assets/forest-1.jpg";
import forestImg2 from "../assets/forest-2.jpg";
import forestImg3 from "../assets/forest-3.jpg";
import forestImg4 from "../assets/forest-4.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
          className='d-block w-100'
          src={ forestImg }
          alt='Forest'
          style={{ height: "600px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>React Web</h3>
            <p>We make beautiful websites for you to order</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          className='d-block w-100'
          src={ forestImg2 }
          alt='Forest'
          style={{ height: "600px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>React Web</h3>
            <p>We make beautiful websites for you to order</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          className='d-block w-100'
          src={ forestImg3}
          alt='Forest'
          style={{ height: "600px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>React Web</h3>
            <p>We make beautiful websites for you to order</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          className='d-block w-100'
          src={ forestImg4 }
          alt='Forest'
          style={{ height: "600px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>React Web</h3>
            <p>We make beautiful websites for you to order</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
