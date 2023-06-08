import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  let navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [image, setImage] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();

    if (title.length < 2) {
      setErrorMessage("Title must be at least 2 characters long.");
      return;
    }

    if (price <= 0) {
      setErrorMessage("Price must be greater than 0.");
      return;
    }

    fetch("http://localhost:4000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        price,
        description,
        image,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPrice(0);
        setTitle("");
        setDescription("");
        setErrorMessage("");
        setImage("");
        alert("Product added successfully.");
        navigate("/products");
      });
  };

  return (
    <>
      <h1>Add Products</h1>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="productTitle"
            aria-describedby="Product title"
            placeholder="Product title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="productDescription"
            aria-describedby="Product Description"
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            image
          </label>
          <input
            type="text"
            className="form-control"
            id="productDescription"
            aria-describedby="Product image"
            placeholder="Product image url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            aria-describedby="Product Price"
            placeholder="Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}

export default AddProduct;
