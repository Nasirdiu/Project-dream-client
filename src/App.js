
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SingUp from './pages/Login/SingUp';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singUp' element={<SingUp></SingUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
