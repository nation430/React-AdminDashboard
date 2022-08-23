import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/home/userList/UserList";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="wrapper flex h-full">
        <Sidebar />
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="user" element={<UserList />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
