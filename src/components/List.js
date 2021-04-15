import React, { useState, useEffect } from "react"

export default function List({ getItems }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getItems(1))
    console.log("Update Items")
  }, [getItems])

  return (
    <div>
      {items.map((item) => {
        return <div key={item}>{item}</div>
      })}
    </div>
  )
}
