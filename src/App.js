import React from "react"
import LearnUseContext from "./components/LearnUseContext"
import LearnUseEffect from "./components/LearnUseEffect"
import LearnUseMemo from "./components/LearnUseMemo"
import LearnUseReducer from "./components/LearnUseReducer"
import LearnUseRef from "./components/LearnUseRef"
import LearnUseState from "./components/LearnUseState"

function App() {
  return (
    <>
      <LearnUseState />
      <LearnUseEffect />
      <LearnUseMemo />
      <LearnUseRef />
      <LearnUseContext />
      <LearnUseReducer />
    </>
  )
}

export default App
