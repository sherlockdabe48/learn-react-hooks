import React from "react"
import "./App.css"
import LearnUseContext from "./components/LearnUseContext"
import LearnUseEffect from "./components/LearnUseEffect"
import LearnUseMemo from "./components/LearnUseMemo"
import LearnUseRef from "./components/LearnUseRef"

function App() {
  return (
    <>
      <LearnUseEffect />
      <LearnUseMemo />
      <LearnUseRef />
      <LearnUseContext />
    </>
  )
}

export default App
