import React from "react";
import { Button } from "@mui/material";
import CustomButton from "../../components/button/Button";
const About = () => {
  return (
    <div>
      <h4>About</h4>
      <p>This is About Page</p>
      <CustomButton
        text="Hello"
        size="small"
        type={"outlined"}
        onClick={() => console.log("clicked")}
      />
      <br />
      <CustomButton
        text="Hello"
        size="medium"
        type={'text'}
        onClick={() => console.log("clicked")}
      />
      <br />
      <CustomButton
        text="Hello"
        size="large"
        onClick={() => console.log("clicked")}
      />
      <div>
        <h4>MUI styles</h4>
        <Button size="large" variant="contained" color="warning" >
          MUI Button
        </Button>
      </div>
    </div>
  );
};

export default About;
