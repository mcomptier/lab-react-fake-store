import React, { useState, useEffect } from "react";
import "../styles/Productstyle.css";
import { Link } from "react-router-dom";


function ProductListPage() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (response.ok) {
        const productData = await response.json();
        setProducts(productData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log('component mounted');
    fetchData();
  }, []);


  return (
    <div className="ProductDetailsPage">
    <ul className="product-list">
      {products.map(product => (
        <li key={product.id} className="product-item">
         <Link to={`/product/details/${product.id}`} className="product-link">
         <img src={product.image} />
          <div className="product-details">
            <div>
              <span className="product-title">{product.title}</span>
              <span className="product-price">Price: {product.price}</span>
              <p className="product-description">{product.description}</p>
            </div>
          </div>
          </Link>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default ProductListPage;
