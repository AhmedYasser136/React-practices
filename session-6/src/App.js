import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddProduct from "./Pages/AddProduct";
import Products from "./Pages/Products";
import About from "./components/About";
import ProductDetailss from "./Pages/ProductDetailss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row col-12 ">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddProduct />} />
            <Route path="products/:productID" element={<ProductDetailss />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
