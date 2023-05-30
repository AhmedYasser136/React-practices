import "./ProductsList.css";
import Product from "./Product";
import { useEffect, useState } from "react";
import Loading from "./Loading";

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const productsData = products.map((product) => {
    return (
      <>
        <Product key={product.id} product={product} />
      </>
    );
  });

  return (
    <>
      {products.length === 0 ? (
        <Loading />
      ) : (
        <div className="products-list">{productsData}</div>
      )}
    </>
  );
}

export default ProductsList;
