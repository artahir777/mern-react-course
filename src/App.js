import "./App.css";
import Home from "./pages/home/Home";

import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import Navbar from "./components/navigation/Navbar";
import Error from "./pages/error/Error";
import Persons from "./pages/persons/Persons";
import Person from "./pages/persons/Person";
import ContextComp from "./pages/contextForm/ContextComp";
import Profile from "./pages/profile/Profile";
import UpdateForm from "./pages/profile/UpdateForm";
// import { useState } from "react";

function App() {
  // const [data, setData] = useState("some data");

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
        <Route path="/context" element={<ContextComp/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/update-profile" element={<UpdateForm/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
