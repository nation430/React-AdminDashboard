import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="wrapper flex h-full">
        <Sidebar />
        <Routes>
          <Route exact path="/">
            <Route path="/" element={<Home />} />
            <Route path="users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="newUser" element={<NewUser />} />
            <Route path="/product/:productId" element={<Product />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
