import React from "react";
import { useNavigate } from "react-router-dom";
import "./persons.css";
import HeadingAndText from "../../components/header-info/HeadingAndText";
const Card = ({ person }) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <HeadingAndText heading={"Name: "} text={person.name} />
      <button
        onClick={() => {
          navigate(`${person.id}`);
        }}
      >
        More details...
      </button>
    </div>
  );
};

export default Card;
