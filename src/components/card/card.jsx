import { useState } from "react";
import "./card.css";

const Card = ({ person, updatePerson, id }) => {
  const [personState, setPersonState] = useState(person);
  const [isEditable, setIsEditable] = useState(false);

  const onValueChange = (event) => {
    const { name, value } = event.target;
    setPersonState((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEdit = () => {
    setIsEditable((prev) => !prev);
  };

  const onUpdate = (e) => {
    e.preventDefault();
    updatePerson(id, personState);
    setIsEditable(false);
  };

  const onCancel = () => {
    setIsEditable(false);
    setPersonState((prev) => ({ ...prev, ...person }));
  };

  return (
    <form onSubmit={onUpdate} className="card-main">
      <Field
        label="Name"
        value={personState.name}
        id="name"
        itemName="name"
        onChange={onValueChange}
        editMode={isEditable}
      />
      <Field
        label="Age"
        value={personState.age}
        id="age"
        itemName="age"
        onChange={onValueChange}
        editMode={isEditable}
      />
      <Field
        label="Gender"
        value={personState.gender}
        id="gender"
        itemName="gender"
        onChange={onValueChange}
        editMode={isEditable}
      />
      {!isEditable ? (
        <button onClick={toggleEdit} className="edit-btn" >Edit</button>
      ) : (
        <div className="form-buttons">
          <button type="submit">Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      )}
    </form>
  );
};

const Field = ({ label, value, id, itemName, onChange, editMode }) => {
  return (
    <div className="field">
      <label htmlFor={itemName}>{label}</label>
      <input
        name={itemName}
        id={id}
        value={value}
        onChange={onChange}
        disabled={!editMode}
      />
    </div>
  );
};

export default Card;
