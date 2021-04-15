//Explaination from Kyle Cook
//https://youtu.be/_AyFP5s69N4

import React, { useCallback, useState } from "react"
import List from "./List"

export default function LearnUseCallback() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState("true")

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  }

  function toggleTheme() {
    setDark((prevTheme) => !prevTheme)
  }

  const getItems = useCallback(
    (incrementor) => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ]
    },
    [number]
  )

  return (
    <div style={theme}>
      <h1>7. Learn useCallback</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <List getItems={getItems} />
    </div>
  )
}
