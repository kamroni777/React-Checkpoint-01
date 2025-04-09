import React from 'react';
import product from '../product';
import { Image } from 'react-bootstrap';

const ProductImage = () => {
  return (
    <div className="product-image">
      <Image 
        src={product.imageUrl} 
        alt={product.name} 
        fluid 
        rounded
        className="mb-3"
      />
    </div>
  );
};

export default ProductImage;