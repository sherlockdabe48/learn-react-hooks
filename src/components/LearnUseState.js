import React, { useState } from "react"

export default function LearnUseState() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>1. Learn useState</h1>
      <div>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </button>
        <span>{count}</span>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
      </div>
    </div>
  )
}
