import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

const  App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
