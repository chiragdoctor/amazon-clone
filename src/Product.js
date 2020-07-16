import React from 'react';
import './Product.css';

const Product = ({ id, title, price, image, rating }) => {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_) => (
              // eslint-disable-next-line jsx-a11y/accessible-emoji
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt='' />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
