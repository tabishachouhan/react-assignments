import React, { useState, useMemo, useCallback } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [counter, setCounter] = useState(0);

  // Large product list simulation
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Tablet", price: 15000 },
    { id: 4, name: "Headphones", price: 3000 },
    { id: 5, name: "Smart Watch", price: 7000 },
  ];

  /*
    useMemo:
    Total price is calculated only when products change
  */
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, item) => sum + item.price, 0);
  }, [products]);

  /*
    useCallback:
    Prevents function recreation on every render
  */
  const handleProductSelect = useCallback((product) => {
    console.log("Selected Product:", product.name);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Performance Optimization</h1>

      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <hr />

      <ProductList
        products={products}
        onProductSelect={handleProductSelect}
      />
    </div>
  );
}

export default App;
