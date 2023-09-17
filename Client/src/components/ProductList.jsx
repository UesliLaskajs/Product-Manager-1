import { useState } from "react";
import axios from "axios";

const ProductList = () => {
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");

    const eventHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/products/product", {
                title,
                price,
                description,
            })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        setTitle(""),
        setPrice("") ,
        setDescription("") ;
    };

    return (
        <>
            <form onSubmit={eventHandler}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    placeholder="title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />

                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    placeholder="price"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />

                <label htmlFor="desc">Description:</label>
                <input
                    type="text"
                    placeholder="desc"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                <button>Submit</button>
            </form>
        </>
    );
};

export default ProductList;
