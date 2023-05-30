import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import WatchList from "./components/WatchList/WatchList";
import Watched from "./components/Watched/Watched";
import Add from "./components/Add/Add";
import ContextProvider from "./components/context/GlobalContext";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
