import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newuserpage/NewUser"
import Products from "./pages/productlist/ProductsList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newproduct/NewProduct";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/users" element={<UserList></UserList>}></Route>
          <Route path="/user/:userId" element={<User></User>}></Route>
          <Route path="/newUser" element={<NewUser></NewUser>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/product/:userId" element={<Product></Product>}></Route>
          <Route path="/newproduct" element={<NewProduct></NewProduct>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
