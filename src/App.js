import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Launch from "./components/Launch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/launch/:id' element={<Launch/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
