function Product(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h1>{props.price}</h1>
      <span>{props.des}</span>
    </>
  );
}

export default Product;
