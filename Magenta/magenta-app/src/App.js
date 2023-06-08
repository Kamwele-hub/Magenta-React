import './CSS/App.css';
import Home from './models/Home';
import AllPets from './models/Allpets';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Mypets from './models/Mypets';


function App() {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/mypets" element={<Mypets/>}/>
    <Route exact path="/allpets" element={<AllPets/>}/>
    </Routes>
    </Router>
  );
}

export default App;
