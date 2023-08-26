import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { PERSONS } from "../../utils/data";
import Card from "./Card";
import "./persons.css";
const Persons = () => {
  const [persons, setPersons] = useState(PERSONS);

  const filterPersons = (value) => {
    if (!value) setPersons(PERSONS);

    setPersons(
      PERSONS.filter((per) =>
        per.name.toLowerCase().startsWith(value?.trim().toLowerCase())
      )
    );
  };

  return (
    <div className="persons">
      <h4>Persons</h4>

      <input
        type="text"
        placeholder="Seacrh by Person Name"
        onChange={(e) => filterPersons(e.target.value)}
      />

      {persons && persons.length > 0 ? (
        persons.map((item, index) => <Card person={item} key={index} />)
      ) : (
        <p>No results found</p>
      )}
      <Outlet />
    </div>
  );
};

export default Persons;
