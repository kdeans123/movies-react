import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Movies from "./pages/Movies";
// import Movies from './pages/Movies'; 


const [searchTerm, setSearchTerm] = useState([]);

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/movies" element={<Movies/>}></Route>
        </Routes>

    </Router>
  );
}

export default App;
