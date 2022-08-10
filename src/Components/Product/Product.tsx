import React from 'react';
import { ProductType } from 'Types';
import { Container } from './Product.style';

const Product = (product: ProductType) => {
  return (
    <Container>
      <img src={product.thumbnail} alt='Image' />
      <div className='content'>
        <h1>{product.title}</h1>
        <p>{product.category}</p>
        <h2>${product.price}</h2>
      </div>
    </Container>
  );
};

export default Product;
