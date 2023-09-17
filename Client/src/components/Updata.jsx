import { useState, useEffect } from "react";
import axios from "axios";
import {  useNavigate, useParams } from "react-router-dom";


const Update = () => {
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/products/${id}`)
            .then((res) => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const eventHandler = (e) => {
        e.preventDefault();
        axios
            .patch(`http://localhost:8000/products/${id}`, {
                title,
                price,
                description,
            })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        setTitle(""), setPrice(""), setDescription("");
        navigate('/')
    };

    return (
        <>
            <h1>Update a product</h1>
            <form onSubmit={eventHandler}>
                <label htmlFor="title">Change title :</label>
                <input
                    type="text"
                    placeholder="title"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="title">Change price :</label>
                <input
                    type="text"
                    placeholder="price"
                    onChange={(e) => setPrice(e.target.price)}
                />

                <label htmlFor="desc">Change description :</label>
                <input
                    type="text"
                    placeholder="desc"
                    onChange={(e) => setDescription(e.target.description)}
                />
                <button>Submit</button>
            </form>
        </>
    );
};


export default Update;