import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/home/userList/UserList";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="wrapper flex h-full">
        <Sidebar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
