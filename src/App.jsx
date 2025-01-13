import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";
import NavBar from './components/Navbar';
import Houses from "./components/Houses";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters" element={<CharacterList category="all" />} />
        <Route path="/staff" element={<CharacterList category="staff" />} />
        <Route path="/students" element={<CharacterList category="students" />} />
        <Route path="/houses" element={<Houses category="house" />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
