import React, { useState, useEffect, } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/Productstyle.css";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const {productId} = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      
      if (response.ok) {
        const productData = await response.json();
        setProduct(productData);
      } else {
        console.error(`Failed to fetch product details. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    console.log('component mounted');
    fetchData();
  }, [productId]);


  return (
    <div className="ProductDetailsPage">
         <div className="ProductDetailsPage">
      <div className="product-item">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-details">
          <div>
            <span className="product-title">{product.title}</span>
            <span className="product-price">Price: {product.price}</span>
            <p className="product-description">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProductDetailsPage;
