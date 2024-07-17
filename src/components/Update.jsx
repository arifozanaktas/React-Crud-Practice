import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const {id} = useParams()

    const [name, setname] = useState("")
    const [unitPrice, setunitPrice] = useState("")
    const [quantityPerUnit, setquantityPerUnit] = useState("")

    useEffect(() => {
     axios.get(`https://northwind.vercel.app/api/products/${id}`)
     .then(res=>{
        setname(res.data.name);
        setunitPrice(res.data.unitPrice);
        setquantityPerUnit(res.data.quantityPerUnit);
     })
    }, [])

    const navigate = useNavigate()

    const update = () => {
        axios.put("https://northwind.vercel.app/api/products/" + id,{
            name,
            unitPrice,
            quantityPerUnit
        }).then(res => {
            navigate("/")
        })
    }
    




  return (<>
    <h1>Update Page</h1>
    <h2>Id: {id}</h2>
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
        <button onClick={update}>Update</button>
      </div>
    </>)
}

export default Update