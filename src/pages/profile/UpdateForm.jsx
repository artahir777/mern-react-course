import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";

const UpdateForm = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ...user
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const newValues = {
      firstName: 'Ali',
      lastName: 'Khan',
    }
    dispatch(updateUser({ ...newValues }));
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
      <form className="my-form" onSubmit={onSubmit}>
        <div className="form-item">
          <label htmlFor="fname">First Name</label>
          <input
            value={formData.firstName}
            type="text"
            id="fname"
            name="fname"
            onChange={onChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="lname">Last Name</label>
          <input
            value={formData.lastName}
            type="text"
            id="lname"
            name="lname"
            onChange={onChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="age">Age</label>
          <input
            value={formData.firstName}
            type="number"
            id="age"
            name="age"
            onChange={onChange}
          />
        </div>
        <div className="form-buttons">
          <button type="submit">Save</button>
          <button onClick={() => navigate(-1)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
