import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";

function App() {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className="flex">
        <Sidebar />
        <div className="others w-full">other page</div>
      </div>
      <Topbar />
    </div>
  );
}

export default App;
