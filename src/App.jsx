import LeftSidebar from "./components/layout/LeftSidebar"
import Main from "./components/layout/Main"
import RightSidebar from "./components/layout/RightSidebar"

function App() {

  return (
    <div className="app-container">
      <LeftSidebar />
      <Main />
      <RightSidebar />
    </div>
  )
}

export default App
