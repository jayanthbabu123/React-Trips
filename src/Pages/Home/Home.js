import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  
  const handleIncrement = () => {
    
  };

  return (
    <div>
      <input />
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
