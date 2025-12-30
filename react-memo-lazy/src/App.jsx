import React, { useState, lazy, Suspense } from "react";

// Lazy load the heavy component
const HeavyComponent = lazy(() => import("./components/HeavyComponent"));

function App() {
  const [count, setCount] = useState(0);

  console.log(" Parent App rendered");

  return (
    <div style={{ padding: "30px" }}>
      <h1>React.memo & Lazy Loading </h1>

      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>

      <hr />

      <Suspense fallback={<p>Loading Heavy Component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
