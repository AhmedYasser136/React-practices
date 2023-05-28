import './ProductsList.css'
function Product(props) {
  return (
    <div className="card">
      <img src={props.product.image} alt=""/>
      <h1>{props.product.title}</h1>
      <p>{props.product.description}</p>
      <p>${props.product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
export default Product;
