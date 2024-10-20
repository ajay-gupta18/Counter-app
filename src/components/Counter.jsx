import React, { useState, useEffect } from 'react'
import { GrPowerReset } from "react-icons/gr";
import Button from './sub-components/Button';


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
      <Button onClick={handleIncrement}>+</Button>
      <Button onClick={handleDecrement}>-</Button>
      {resetDisable ? null : <Button onClick={handleReset}><GrPowerReset/></Button>}
    </div>
  )
}

export default Counter
