import React from 'react'
import './Counter.css'

const Counter = ({ onIncrease, onDecrease, number }) => {
  return (
    <div>
      <h1>{number}</h1>
      <button id="btn" onClick={onIncrease}>
        +1
      </button>
      <button id="btn" onClick={onDecrease}>
        -1
      </button>
    </div>
  )
}

export default Counter
