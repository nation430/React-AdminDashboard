import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/Home";
import "./app.css";

function App() {
  return (
    <div>
      <Topbar />
      <div className="wrapper flex h-full">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
