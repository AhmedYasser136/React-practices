import { useState } from "react";

function Form() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const nameHandler = (value) => {
    setName(value);
  };

  const passwordHandler = (value) => {
    setPassword(value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ name, password });
      }}
    >


      <label>Name</label>
      <input
        type="text"
        placeholder="Your Name"
        onChange={(event) => {
          nameHandler(event.target.value);
        }}
      />



      <label>Password</label>
      <input
        type="password"
        placeholder="Your Password"
        onChange={(event) => {
          passwordHandler(event.target.value);
        }}
      />



      <label>Gender</label>
      <select>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>



      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
