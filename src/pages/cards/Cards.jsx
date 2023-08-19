import { useEffect, useState } from "react";
import { PERSONS } from "../../utils/data";
import Card from "../../components/card/card";
import "./cards.css";

const Cards = () => {
  const [personsList, setPersonsList] = useState(PERSONS);

  const updatePerson = (index, person) => {
    setPersonsList((prevList) =>
      prevList.map((item, i) => (i === index ? person : item))
    );
  };

  useEffect(() => {
    console.log("persons on every update", personsList);
  }, [personsList]);

  return (
    <div className="container">
      {personsList.map((item, index) => (
        <Card
          key={index}
          person={item}
          id={index}
          updatePerson={updatePerson}
        />
      ))}
    </div>
  );
};

export default Cards;
