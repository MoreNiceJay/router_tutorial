import React, { useState, useEffect } from "react"
import "./App.css"
import { Link } from "react-router-dom"

function Item({ match }) {
  useEffect(() => {}, [])
  console.log(match)
  const [item, setItem] = useState({})

  return (
    <div>
      <h1>{match.url}</h1>
    </div>
  )
}

export default Item
