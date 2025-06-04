import React from 'react'

const ProductCard = ({product}) => {
  return (
      <div style={{ border: "1px solid #ddd", padding: 10, margin: 10, width: 200 }}>
      <img src={product.image} alt={product.title} width="100" height="100" />
      <h4>{product.title}...</h4>
      <p>₹ {product.price}</p>
      <p style={{ fontSize: 12 }}>{product.category}</p>
    </div>
  )
}

export default ProductCard