import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <sidebar />
        other page
      </div>
    </div>
  );
}

export default App;
