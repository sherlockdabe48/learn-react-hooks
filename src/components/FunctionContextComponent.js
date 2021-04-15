import React from "react"
import { useTheme, useThemeUpdate } from "./ThemeContext"

export default function FunctionContextComponent() {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  const themeStye = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  }

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStye}>Function Theme</div>
    </>
  )
}
