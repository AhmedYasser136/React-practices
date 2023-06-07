import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Pages/Page.css";

function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
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
            <th>operation</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description.slice(0, 50)}...</td>
                <td>{product.price}</td>

                <td>
                  <button className="btn btn-danger btn-sm">Delete</button>
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
