import Home from "../src/pages/home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Discover from "../src/pages/discover/Discover.jsx"
import Join from "../src/pages/join/Join.jsx"

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element= {<Home/>}></Route> 
        <Route path="/discover" element= {<Discover/>}></Route> 
        <Route path="/join" element={<Join/>}></Route>   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
