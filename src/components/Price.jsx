import React from 'react';
import product from '../product';
import { Badge } from 'react-bootstrap';

const Price = () => {
  return (
    <div className="product-price">
      <Badge bg="success" className="price-badge">
        ${product.price.toFixed(2)}
      </Badge>
    </div>
  );
};

export default Price;