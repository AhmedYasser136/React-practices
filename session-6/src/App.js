import { Outlet, Route, Routes } from "react-router-dom";
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

            <Route
              path="products"
              element={
                <>
                  <Outlet />
                </>
              }
            >
              <Route path="" element={<Products />} />
              <Route path="add" element={<AddProduct />} />
              <Route path=":productID" element={<ProductDetailss />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

//   json-server --watch db.json --port 4000
