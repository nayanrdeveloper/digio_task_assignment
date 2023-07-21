import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DocumentScreen from "./pages/DocumentScreen";
import HomeScreen from "./pages/HomeScreen";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/document" element={<DocumentScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
