import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Destination from "./pages/Destination";
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/destination*" element={<Destination />} />
      </Routes>
    </Router>
  );
}

export default App;

