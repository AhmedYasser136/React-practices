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
  }, [productID]);
  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price} $</p>
      <p className="">{product.category}</p>
    </>
  );
}

export default ProductDetailss;
