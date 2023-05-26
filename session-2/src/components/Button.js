function Button(props) {
  const btnHAndler = () => {
    console.log("عملت فيك ايه دا احنا غلابه");
  };

  return (
    <button className="react-btn" onMouseEnter={btnHAndler}>
      {props.title}
    </button>
  );
}

export default Button;
