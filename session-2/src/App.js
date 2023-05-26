import "./App.css";
import WelcomeFC from "./components/WelcomeFC";
import Welcome from "./components/Welcome";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Test from "./components/Test";
import Hp from "./components/Hp";
import Button from "./components/Button";
import Input from "./components/Input";
import Form from "./components/Form"
function App() {
  return (
    <div className="App">
      {/* <Welcome name="kk" />
      <Cart descreption="pengou" />
      <Product title="aab" price="50" des="lllllll" />  */}
      {/* <WelcomeFC name="ali" age="25" />
      <WelcomeFC name="ahmed" age="20" /> */}
      {/* <Test />
      <Welcome />
      <Hp /> */}
      {/* <Button title="btn"/>  */}
      {/* <Input label="name" type="text" />
      <Input label="password" type="password" /> */}

      <Form />
    </div>
  );
}

export default App;
