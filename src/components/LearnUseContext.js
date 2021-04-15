//Kyle Cook Explaination
//https://youtu.be/5LrDIWkK_Bc

import React from "react"
import FunctionContextComponent from "./FunctionContextComponent"
import { ThemeProvider } from "./ThemeContext"

export default function LearnUseContext() {
  return (
    <>
      <h1>5. Learn useContext</h1>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  )
}
