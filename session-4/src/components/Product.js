import "./ProductsList.css";
function Product(props) {
  return (
    <div className="card">
      <img src={props.product.image} alt="" />
      <h1>{props.product.title}</h1>
      <p>${props.product.price}</p>
      <button>Add to Cart</button>
      <p>rate {props.product.rating.rate}/10</p>
      <p>count {props.product.rating.count} </p>
      <br />
      <br />
    </div>
  );
}
export default Product;
