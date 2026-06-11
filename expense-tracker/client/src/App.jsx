import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"


function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Dashboard />
      </div>
    </div> 
  )
}

export default App
