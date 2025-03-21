import LeftSidebar from "./components/layout/LeftSidebar";
import Main from "./components/layout/Main";
import MediumLeftSidebar from "./components/layout/MediumLeftSidebar";
import RightSidebar from "./components/layout/RightSidebar";
import SmallLeftSidebar from "./components/layout/SmallLeftSidebar";

function App() {
  return (
    <div className="app-container">
      <LeftSidebar />
      <MediumLeftSidebar />
      <SmallLeftSidebar />
      <Main />
      <RightSidebar />
    </div>
  );
}

export default App;
