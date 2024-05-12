import "./App.css";
import SideBar from "./layouts/SideBar";
import HomeDashboard from "./components/HomeDashboard";

function App() {
  return (
    <main className="app_container">
      <div className="side_bar_container">
        <SideBar />
      </div>
      <div className="page_container">
        <HomeDashboard />
      </div>
    </main>
  );
}

export default App;
