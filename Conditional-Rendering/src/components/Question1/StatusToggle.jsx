import { useState } from "react";

function StatusToggle() {
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    setStatus(!status);
  };

  return (
    <div>
      <button onClick={handleClick}>
        Toggle Status
      </button>

      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}

export default StatusToggle;
