import React, { useState, useEffect } from "react"
import "./App.css"
import { Link } from "react-router-dom"

function Shop() {
  useEffect(() => {
    fetchItems()
  }, [])

  const [item, setItems] = useState([])
  const fetchItems = async () => {
    const data = await fetch("https://reqres.in/api/users?page=2")
    const items = await data.json()
    console.log(items)
    setItems(items.data)
  }
  return (
    <div>
      {item.map(item => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.email}</Link>
        </h1>
      ))}
    </div>
  )
}

export default Shop
