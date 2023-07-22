import { useState } from "react";
import "./form.css";

const Form = () => {
  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState(0);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({ username: "", age: undefined });

  const submitForm = (event) => {
    event.preventDefault();
    console.log("formData", formData);
    const { username, age } = formData;
    if (username.length > 5 && username.length <= 15 && age > 18) {
      console.log("values", username, age);
      // some API call
      setError(null);
    } else setError("Invalid Data entered");
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("on change", formData);
  };

  return (
    <div>
      <form className="my-form" name="login-form" onSubmit={submitForm}>
        <div className="form-item">
          <label htmlFor="username"> Username </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={onChange}
          />
        </div>

        <div className="form-item">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" onChange={onChange} />
        </div>

        <button type="submit">submit</button>
        {error && <p className="error-text"> {error} </p>}
      </form>
    </div>
  );
};

export default Form;
