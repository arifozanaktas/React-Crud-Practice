import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Product() {

    const [product, setproduct] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        loadData();
    }, [])

    const loadData = () => {
        axios.get("https://northwind.vercel.app/api/products")
            .then(res => { setproduct(res.data) })
    }



    const deleteSupplier = (id) => {

        const result = window.confirm("Are u sure?")

        if (!result)
            return

        axios.delete("https://northwind.vercel.app/api/products/" + id)
            .then(res => {
                loadData()
            })

    }








    return (<>
        <button onClick={() => navigate('/products/add')}>Add New Product</button>
    <hr />
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>SupplierId</td>
                    <td>CategoryId</td>
                    <td>Name</td>
                    <td>CompanyName</td>
                    <td>Detail</td>
                    <td>Delete</td>
                    <td>Update</td>
                </tr>
            </thead>
            <tbody>
                {
                    product.map(item =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.supplierId}</td>
                            <td>{item.categoryId}</td>
                            <td>{item.name}</td>
                            <td>{item.supplier?.companyName}</td>
                            <td><Link to={`/products/detail/${item.id}`}>Detail</Link></td>
                            <td><button onClick={() => deleteSupplier(item.id)}>Delete</button></td>
                            <td><button onClick={() => navigate('/products/update/' + item.id)}>Update</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        </>
    )
}

export default Product