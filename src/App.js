import React, { useState, useEffect } from "react"
import "./App.css"

const API_URL = "https://jsonplaceholder.typicode.com/"

function App() {
  const [resourceType, setResourceType] = useState("users")
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`${API_URL}${resourceType}`)
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [resourceType])
  return (
    <>
      <div>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {data.map((d) => {
        return <pre>{JSON.stringify(d)}</pre>
      })}
    </>
  )
}

export default App
