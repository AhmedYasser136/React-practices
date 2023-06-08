import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Pages/Page.css";
import Swal from "sweetalert2";

function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  const deleteProduct = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/products/${productId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => getAllProducts());
      }
    });
  };

  return (
    <>
      <h1>Products</h1>
      <Link className="btn btn-success mt-3" to={"/products/add"}>
        Add Product
      </Link>
      <table className="table table-striped mt-s">
        <thead>
          <tr>
            <th className="idd">ID</th>
            <th>Title</th>
            <th className="dec">Description </th>
            <th>Price</th>
            <th>Image</th>
            <th>operation</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title.slice(0, 10)}</td>
                <td>{product.description.slice(0, 40)}</td>
                <td>{product.price}</td>
                <img src={product.image} className="w-50" />

                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-info btn-sm"
                  >
                    View
                  </Link>
                  <button className="btn btn-primary btn-sm">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Products;
