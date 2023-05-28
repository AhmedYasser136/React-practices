import productsData from "../product-data";
import './ProductsList.css'
import Product from "./Product";
function ProductsList(props) {
  const products = productsData.map((product) => {
    return product.price > 100 ? (
      <Product key={product.id} product={product} />
    ) : null;
  });

  return <div className="products-list">{products}</div>;
}

export default ProductsList;
