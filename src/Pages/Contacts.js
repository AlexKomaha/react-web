import React, { Component } from 'react'
import { Form, Button, Container } from "react-bootstrap";

export default class Contacts extends Component {
  render() {
    return (
      <Container className='mt-5' style={{ width:"500px" }}>
        <h1 className='text-center'>Contact Us</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className='mt-3'>Email Adress</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
            <Form.Text>We'll never share your email with anyone else</Form.Text>
          </Form.Group>
          <Form.Group className='mt-3' controlId="formBasicPassword">
          <Form.Label>Textarea</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder="Your Message" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type='checkbox' label="Check me out" />
          </Form.Group>
          <Button className='mt-3' variant='primary' type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}
