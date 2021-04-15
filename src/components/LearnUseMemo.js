import React, { useEffect, useMemo, useState } from "react"

export default function LearnUseMemo() {
  const [number, setNumber] = useState(2)

  //Use useMemo on doubleNumber for
  // => If the [number] not change => The code in useMemo will not run.
  const doubleNumber = useMemo(() => {
    return doubleNumberSlowFunction(number)
  }, [number])

  const [dark, setDark] = useState(true)

  const themeStye = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    }
  }, [dark])

  // Use UseMemo on const themeStyle for
  // => This will run only when [themeStyle] changed no run when number is change
  useEffect(() => {
    console.log("theme change")
  }, [themeStye])

  return (
    <>
      <h1>2. Learn UseMemo</h1>

      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value)
        }}
      />
      <button onClick={() => setDark(!dark)}>Change Theme</button>
      <div style={themeStye}>{doubleNumber}</div>
    </>
  )
}

function doubleNumberSlowFunction(number) {
  for (let i = 0; i < 500000000; i++) {}
  return number * 2
}
