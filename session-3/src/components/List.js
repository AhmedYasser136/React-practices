function List() {
  const arr = ["html", "json", "css", "js"];
  const li = arr.map((el) => <li>{el}</li>);
  return (
    <>
      <ul>{li}</ul>
    </>
  );
}


export default List;