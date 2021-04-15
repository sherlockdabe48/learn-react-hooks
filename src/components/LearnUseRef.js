//Explanation Clip
//https://youtu.be/t2ypzz6gJm0

import React, { useEffect, useRef, useState } from "react"

export default function LearnUseRef() {
  const [name, setName] = useState("Dab")
  const renderCount = useRef(1)
  const inputRef = useRef()
  const prevName = useRef()

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  useEffect(() => {
    prevName.current = name
  }, [name])

  function focus() {
    inputRef.current.focus()
  }

  return (
    <>
      <h1>4. Learn useRef</h1>
      <div>
        <input
          ref={inputRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>useState example : My name is {name}</div>
        <div>
          useRef example#1 :<button onClick={focus}>Focus</button>
        </div>
        <div>useRef example#2 : I rendered {renderCount.current} times</div>
        <div>
          useRef example#3 : My name is <strong>{name}</strong> <br /> and My
          old name is <strong>{prevName.current}</strong>
        </div>
      </div>
    </>
  )
}
