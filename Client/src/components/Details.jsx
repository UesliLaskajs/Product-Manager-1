import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const Details = () => {

    const [details, setDetails] = useState({});
    let { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`)
            .then((res) => {
                console.log(res.data)
                setDetails(res.data)
            })
            .catch((err) => {
                console.log("Error getting data ,", err)
            })


    }, [id])

    return (
        <div className="Details">
            <h1>Product Selected</h1>
            <div className="all_products_containers">
                <h2>Title:{details.title}</h2>
                <h3>Price:{details.price}</h3>
                <h4>Description: {details.description}</h4>
            </div>
        </div>

    )

}

export default Details