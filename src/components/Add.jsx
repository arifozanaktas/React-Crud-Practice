import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Add() {
  const [name, setname] = useState("")
  const [unitPrice, setunitPrice] = useState("")
  const [quantityPerUnit, setquantityPerUnit] = useState("")
  
  const navigate = useNavigate()

  const add = () => {
    axios.post("https://northwind.vercel.app/api/products", {
      name,
      unitPrice,
      quantityPerUnit
    })
      .then(res => {
        navigate("/")
      })

  }






  return (<>
  <h1>Added Page</h1>
    <div>
        <label htmlFor="">Name</label>
        <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">Price</label>
        <input type='text' value={unitPrice} onChange={(e) => setunitPrice(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">Company Name</label>
        <input type='text' value={quantityPerUnit} onChange={(e) => setquantityPerUnit(e.target.value)} />
      </div>
      <div>
        <button onClick={add}>Add</button>
      </div>
    </>
    
  )
}

export default Add