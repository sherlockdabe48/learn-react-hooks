import React from "react"
import useLocalStorage from "./useLocalStorage"
import useUpdateLogger from "./useUpdateLogger"

export default function LearnCustomHooks() {
  const [name, setName] = useLocalStorage("name", "")
  useUpdateLogger(name)
  return (
    <div>
      <h1>8. Learn Custom Hooks</h1>
      <p>
        We build "useLocalStorage" hook to save and load the data <br />
        and "useUpdateLogger" hook to log the data in console when value has
        change.
      </p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}
