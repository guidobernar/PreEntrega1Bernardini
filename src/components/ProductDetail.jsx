// ProductDetail.jsx

import React from 'react';
import products from '../products';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const ProductDetail = ({ match }) => {
  const productId = parseInt(match.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
}

  ProductDetail.propTypes = {
    match: PropTypes.object.isRequired,
};

export default ProductDetail;
