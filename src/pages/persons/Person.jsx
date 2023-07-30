import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeadingAndText from "../../components/header-info/HeadingAndText";
import { PERSONS } from "../../utils/data";

const Person = () => {
  const params = useParams();
  const navigate = useNavigate();

  const person = PERSONS.find((item) => item.id == params.id);

  return person ? (
    <div>
      <HeadingAndText heading={"Name: "} text={person.name} />
      <HeadingAndText heading={"Age: "} text={person.age} />
      <HeadingAndText heading={"Gender: "} text={person.gender} />
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  ) : (
    <div>Record Not found</div>
  );
};

export default Person;
