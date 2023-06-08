import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailss() {
  const [product, setProduct] = useState({});

  let { productID } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/products/${productID}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, []);
  return (
    <>
      <p>{product.id}</p>
      <h1>{product.title}</h1>
      <img src={product.image} className="d-block mx-auto w-25" />
      <p>{product.description}</p>
      <p className="btn btn-success d-block ">{product.price} $</p>
    </>
  );
}

export default ProductDetailss;
