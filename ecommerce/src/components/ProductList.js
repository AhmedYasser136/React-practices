import { useEffect, useState } from "react";
import Product from "./Product";

function ProductList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h2 className="text-center p-3 ">Our Product </h2>
      <div className="container ">
        <div className="row ">
          {products.map((product) => (
            <div className="col-3 " key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default ProductList;
