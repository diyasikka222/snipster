import React from 'react';
import './ProductsPage.css';
import shirtImage from '../../assets/shirt_merch.jpg'; // Import directly
import mugImage from '../../assets/mug_merch.jpg';
import hoodieImage from '../../assets/hoodie_merch.jpg';
import stickerImage from '../../assets/stickers_merch.jpg';

const products = [
  { id: 1, name: 'Snipster Shirt', category: 'Wearable', image: shirtImage, price: 25 },
  { id: 2, name: 'Snipster Mug', category: 'Merch', image: mugImage, price: 15 },
  { id: 3, name: 'Snipster Hoodie', category: 'Wearable', image: hoodieImage, price: 40 },
  { id: 4, name: 'Stickers', category: 'Merch', image: stickerImage, price: 5 }
];

const ProdPage = () => {
  return (
    <div className="products-page">
      <h1 className="page-title">Snipster Merchandise</h1>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-category">{product.category}</p>
            <p className="product-price">${product.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdPage;