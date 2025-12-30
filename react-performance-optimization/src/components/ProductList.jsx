import React from "react";

function ProductList({ products, onProductSelect }) {
  console.log("ProductList rendered");

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => onProductSelect(product)}
            >
              Select
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
