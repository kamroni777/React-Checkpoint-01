import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import ProductImage from './components/Image';


const firstName = "John"; 

function App() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="product-card shadow">
            <Card.Body>
              <ProductImage />
              <Name />
              <Price />
              <Description />
            </Card.Body>
          </Card>

          <div className="greeting mt-4 text-center">
            <h3>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</h3>
            {firstName && (
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                alt="User" 
                className="user-avatar mt-2"
              />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;