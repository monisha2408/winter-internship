import { useState, useCallback } from "react";

const UseCallback = () => {
  const [theme, setTheme] = useState(false);
  const [number, setNumber] = useState(0);

  const styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
    padding: "20px",
  };

  // useCallback hook
  const increment = useCallback(() => {
    setNumber((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setNumber((prev) => prev - 1);
  }, []);

  return (
    <div style={styling}>
      <h2>useCallback Example</h2>

      <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
      <br /><br />
      
      
    
    <button onClick={decrement}>-</button>
     

      <input type="number" value={number} readOnly />

      

      
      <button onClick={increment}>+</button>
      <h2>Number: {number}</h2>
    </div>
  );
};

export default UseCallback;