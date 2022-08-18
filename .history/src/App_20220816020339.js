import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        other page
      </div>
    </div>
  );
}

export default App;
