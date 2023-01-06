
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import '../src/App.css'

function App() {
 
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<h1>Error 404</h1>}/>
        </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;