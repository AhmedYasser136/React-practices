import { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Guest from "./components/Guest";
import List from "./components/List";
import ProductsList from "./components/ProductsList";

function App() {
  // const [isLogin, setIsLogin] = useState(false);
  // let element;
  // if (isLogin) {
  //   element = <h1>login</h1>; >>>>>>>>>>> Method 1
  // } else {
  //   element = <h1>not login</h1>;
  // }
  return (
    // <div className="App">
    
    //   <button onClick={() => setIsLogin(true)}>button</button>
    //   {/* {isLogin?<h1>login</h1>:<h1>not login</h1>} */}
    //   {isLogin ? <Welcome name="ahmed" /> : <Guest /> /* or null */}
    //   <List />
    // </div>
    <ProductsList />
  );
}

export default App;
