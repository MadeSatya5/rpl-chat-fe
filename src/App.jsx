import LeftSidebar from "./components/layout/LeftSidebar";
import Main from "./components/layout/Main";
import MediumLeftSidebar from "./components/layout/MediumLeftSidebar";
import RightSidebar from "./components/layout/RightSidebar";

function App() {
  return (
    <div className="app-container">
      <div className="main-left-sidebar">
        <LeftSidebar />
      </div>
      <div className="medium-left-sidebar">
        <MediumLeftSidebar />
      </div>
      <Main />
      <RightSidebar />
    </div>
  );
}

export default App;
