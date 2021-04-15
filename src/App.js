import React from "react"
import "./App.css"
import LearnUseEffect from "./components/LearnUseEffect"
import LearnUseMemo from "./components/LearnUseMemo"
import LearnUseRef from "./components/LearnUseRef"

function App() {
  return (
    <>
      <LearnUseEffect />
      <LearnUseMemo />
      <LearnUseRef />
    </>
  )
}

export default App
