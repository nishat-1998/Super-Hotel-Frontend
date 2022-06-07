import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
//import Hotel from "./pages/hotel/Hotel";
//import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
