import React from 'react'
import { useState } from 'react'

function Navgurukul() {
  const [count, setCount] = useState(0);
  const[count1,setCount1]= useState(0)

  return (
  <div>
      
    <h1>You increased {count} Power Coins💰</h1>
    <button onClick={() => setCount(count + 1)}>Click me</button>
    <h1>YOu decreased {count1} Power coins😞</h1>
    <button onClick={() => setCount1(count1 - 1)}>Click me</button>
  </div>
    
  )
}

export default Navgurukul;