import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductAll = () => {
    const [product, setProduct] = useState([]);

    const removeFromDom = (productId) => {
        setProduct(product.filter((product) => product._id !== productId));
    };

    const deleteProduct = (productId) => {
        axios
            .delete(`http://localhost:8000/products/${productId}`)
            .then(() => {
                removeFromDom(productId);
            })
            .catch((err) => console.log("Error deleting data", err));
    };

    useEffect(() => {
        axios
            .get("http://localhost:8000/products")
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => console.log("Error fetching data", err));
    }, []);

    return (
        <>
            <h1>All Products</h1>
            <div className="all_products_containers">
                {product.map((item, index) => (
                    <div key={index}>
                        <p>Title: {item.title}</p>

                        <Link to={`/products/${item._id}`}>{`Details of ${item.title}`}</Link>{" "}
                        <br />
                        <Link to={`/products/update/${item._id}`}>{`Update Product ${item.title}`}</Link><br></br>
                        <button onClick={() => deleteProduct(item._id)}>
                            Delete
                        </button>
                        <hr />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductAll;
