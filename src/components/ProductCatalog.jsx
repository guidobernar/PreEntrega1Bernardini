// ProductCatalog.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import products from '../products';

const ProductCatalog = () => {
  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalog;
