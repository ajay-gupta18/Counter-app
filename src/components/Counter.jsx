import React,{useState,useEffect} from 'react'

function Counter() {

  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? JSON.parse(savedCount) : 0; 
  });

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);


  const handleIncrement=()=>{
    setCount(count + 1)
  }
  const handleDecrement=()=>{
    setCount(count - 1)
  }
  const handleReset=()=>{
    setCount(0)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default Counter
