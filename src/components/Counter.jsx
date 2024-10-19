import React, { useState, useEffect } from 'react'

function Counter() {

  const [resetDisable, setResetDisable] = useState(true);
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? JSON.parse(savedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  const handleIncrement = () => {
    setResetDisable(false)
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1)
    setResetDisable(false)
  }
  const handleReset = () => {
    setResetDisable(true)
    setCount(0)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset} disabled={resetDisable}>reset</button>
    </div>
  )
}

export default Counter
