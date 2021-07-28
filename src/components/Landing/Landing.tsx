import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import './landing.scss';

class Landing extends Component<any> {
  navbar: HTMLElement | null = null;
  initialTopOffset: number | null = null;

  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h2>Make Payment Using</h2>
                </Card.Title>
                <Card.Text>choose a payment method</Card.Text>
                <a className='btn btn-primary'>Razorpay</a>
                <a className='btn btn-primary'>Paypal Link</a>
                <a className='btn btn-primary'>UPI Link</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Landing;
