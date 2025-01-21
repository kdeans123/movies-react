import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Movies from "./pages/Movies";
import Nav from "./components/Nav";
import Landing from "./components/Landing";


const [searchTerm, setSearchTerm] = useState([]);

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Landing/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/movies" element={<Movies/>}></Route>
        </Routes>
        </div>
    </Router>
  );
}

export default App;
