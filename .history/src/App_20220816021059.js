import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container flex">
        <Sidebar />
        <div className="othes">other page</div>
      </div>
    </div>
  );
}

export default App;
