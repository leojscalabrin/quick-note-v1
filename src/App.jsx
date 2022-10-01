import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={increment}>{count}</button>
    </div>
  );
}

export default App;
