import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"


const ProductAll = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/products")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data); 
      })
      .catch((err) => console.log("Error passing data", err));
  }, []); 

  return (
    <>
      <h1>All Products</h1>
      <div className="all_products_containers">
        {product.map((item, index) => (
          <div key={index}>
            <p>Title: {item.title}</p>
            
            <Link to={`/products/${item._id}`}>Details Of This Products</Link>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductAll;
