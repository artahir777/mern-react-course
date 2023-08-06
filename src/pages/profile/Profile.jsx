import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HeadingAndText from "../../components/header-info/HeadingAndText";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  return (
    <div>
      <HeadingAndText
        heading={"Name"}
        text={`${user.firstName} ${user.lastName}`}
      />
      <HeadingAndText heading={"Username"} text={user.userName} />
      <button onClick={() => navigate("/update-profile")}>Edit Profile</button>
    </div>
  );
};

export default Profile;
