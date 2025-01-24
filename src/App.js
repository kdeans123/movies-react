import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Movies from "./pages/Movies";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/movies" element={<Movies/>}></Route>
        </Routes>
        <Footer/>
        </div>
    </Router>
  );
}

export default App;
