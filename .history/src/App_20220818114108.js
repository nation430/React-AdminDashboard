import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";

function App() {
  return (
    <div>
      <Topbar />
      <div className="wrapper flex h-full">
        <Sidebar />
        <div className="other"></div>
      </div>
    </div>
  );
}

export default App;
