import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Detail() {
    var {id} = useParams()
    const [detail, setdetail] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
      axios.get(`https://northwind.vercel.app/api/products/${id}`)
      .then(res=>setdetail(res.data))
    }, [])

    const goBack = () =>{
        navigate(-1);
    }
    
  return (<>
    <h1>Detail Page</h1>
    <hr />
    <button onClick={goBack}>Go Back</button>
    <h2>id: {id}</h2>
    <h2>supplierId: {detail.supplierId}</h2>
    <h2>categoryId: {detail.categoryId}</h2>
    <h2>quantityPerUnit: {detail.quantityPerUnit}</h2>
    <h2>unitPrice: {detail.unitPrice}</h2>
    <h2>unitsInStock: {detail.unitsInStock}</h2>
    <h2>unitsOnOrder: {detail.unitsOnOrder}</h2>
    <h2>reorderLevel: {detail.reorderLevel}</h2>
    <h2>discontinued: {detail.discontinued}</h2>
    <h2>name: {detail.name}</h2>
    
    </>
  )
}

export default Detail