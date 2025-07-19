import React from 'react';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="product-card" onClick={() => navigate(`/products/${product.id}`)}>
      <h3>{product.name}</h3>
      <i className="fas fa-arrow-circle-right"></i>
    </div>
  );
};

export default ProductCard;
