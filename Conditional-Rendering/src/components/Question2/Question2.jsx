import { useState } from "react";

function Question2() {
  const [isRed, setIsRed] = useState(true);

  return (
    <div>
      <div
        style={{
          color: isRed ? "red" : "blue",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        This text changes color
      </div>

      <button onClick={() => setIsRed(!isRed)}>
        Change Color
      </button>
    </div>
  );
}

export default Question2;
