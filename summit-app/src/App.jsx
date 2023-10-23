import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home"
import Reserves from './pages/Reserves/Reserves'

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/reservas" element={<Reserves />} />
      </Routes>
    </Router>
  )
}

export default App
