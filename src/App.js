import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin/Admin";
import Book from "./pages/Admin/Book";
import Booking from "./pages/Admin/Booking";
import Review from "./pages/Admin/Review";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SingUp from "./pages/Login/SingUp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./pages/RequireAuth/RequireAuth";
import About from "./pages/Home/About";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<RequireAuth><About></About></RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/singUp" element={<SingUp></SingUp>}></Route>
        <Route path="admin" element={<RequireAuth>
          <Admin></Admin>
        </RequireAuth>}>
          <Route index element={<Book></Book>}></Route>
          <Route path="booking" element={<Booking></Booking>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
