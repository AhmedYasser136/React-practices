import { useState } from "react";

function WelcomeFC(props) {
  let [name, setName] = useState("ahmed");
  let [age, setAge] = useState(10);
  return (
    <>
      <h1>hello {props.name}</h1>
      <p>{props.age}</p>
      <h2>{name}</h2>
      <h1>{age}</h1>


      <button
        onClick={() => {
          setName("yasser");
        }}
      >
        Name
      </button>


      <button
        onClick={() => {
          setAge(age + 1);
          console.log(age);
        }}
      >
        +
      </button>


      <button
        onClick={() => {
          setAge(age - 1);
          console.log(age);
        }}
      >
        -
      </button>


    </>
  );
}
export default WelcomeFC;
