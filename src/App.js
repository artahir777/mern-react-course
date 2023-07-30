import "./App.css";
import Home from "./pages/home/Home";

import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import Navbar from "./components/navigation/Navbar";
import Error from "./pages/error/Error";
import Persons from "./pages/persons/Persons";
import Person from "./pages/persons/Person";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="persons">
          <Route index element={<Persons />} />
          <Route path=":id" element={<Person />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
