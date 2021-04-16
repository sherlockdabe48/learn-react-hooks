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
      <p>
        useCallback will benefits when your application renders , and there are
        some function or value that doesn't change, they will not get re-render.
        They will render whenever the value inside useCallback has change and
        that's make your application performance get better. (This useCallback
        is similar to the useMemo, but useCallback can manage the function
        itself, in the other hand useMemo just manage the return value inside of
        the useMemo only. <br /> <br /> In this example: When the number get
        re-render, The Theme will not get render. <br />
        and when the theme is toggle and re-render, the number (that is still
        the same value) will not get re-render.{" "}
      </p>
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
