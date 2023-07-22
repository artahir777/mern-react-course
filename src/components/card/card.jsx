import { useState } from "react";
import "./card.css";

const Card = ({ formValues }) => {

    const [formData, setFormData] = useState(formValues)

  return (
    <div className="card-main">
      <Field name="Name" value="Ali" id="name" itemName="name" />
      <Field name="Age" value={25} id="age" itemName="age" />
      <Field
        name="Username"
        value={"ali123"}
        id="username"
        itemName="username"
      />
    </div>
  );
};

const Field = ({ name, value, id, itemName }) => {
  return (
    <div className="field">
      <label htmlFor={itemName}>{name}</label>
      <input name={itemName} id={id} value={value} />
    </div>
  );
};

export default Card;
