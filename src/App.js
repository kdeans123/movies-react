import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Movies from "./pages/Movies";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useState } from "react";


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" exact element={<Home setSearchTerm={setSearchTerm}/>}></Route>
          <Route path="/movies" exact element={<Movies searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>}></Route>
          <Route path="/movies/:id" element={MovieInfo}/>
        </Routes>
        <Footer/>
        </div>
    </Router>
  );
}

export default App;
