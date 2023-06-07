import "./Product.css";
import Details from "./ProductDetails";
import { Link, Route, Routes } from "react-router-dom";

function Product(props) {
  const { product } = props;
  console.log(props);
  return (
    <>
      <div className="card">
        <img
          src={props.product.image}
          className="card-img-top  size-img "
          alt={props.product.title}
        />
        <div className="card-body">
          <h5 className="card-title">{props.product.title}</h5>
          <p className="card-text">{props.product.description}</p>
          <Link className="btn btn-success " to={`/product/${product.id}`}>
            Details
          </Link>
        </div>
      </div>
    </>
  );
}

export default Product;
