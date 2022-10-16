import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./lib/fontawesome/css/all.min.css";
import Header from "./components/Header";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";
import Add from "./components/Add";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Watchlist />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
