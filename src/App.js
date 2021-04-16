import React from "react"
import LearnCustomHooks from "./components/LearnCustomHooks"
import LearnUseCallback from "./components/LearnUseCallback"
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
      <LearnUseCallback />
      <LearnCustomHooks />
    </>
  )
}

export default App
