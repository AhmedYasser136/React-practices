function Form() {
  return (
    <form>
      <label>Name</label>
      <input type="text" placeholder="Your Name" />
      <br />
      <label>Password</label>
      <input type="password" placeholder="Your Password" />
      <br />
      <label>Gender</label>
      <select>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
    </form>
  );
}
export default Form;
