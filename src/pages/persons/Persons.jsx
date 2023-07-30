import React from "react";
import { Outlet } from "react-router-dom";
import { PERSONS } from "../../utils/data";
import Card from "./Card";
import './persons.css';
const Persons = () => {
  return (
    <div className="persons" >
      <h4>Persons</h4>
      {PERSONS.map((item, index) => (
        <Card person={item} key={index} />
      ))}
      <Outlet />
    </div>
  );
};

export default Persons;
