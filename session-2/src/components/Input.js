function Input(props) {
    
  return (
    <>
      <label>{props.label}</label>
      <input
        type={props.type}
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
    </>
  );
}

export default Input;
