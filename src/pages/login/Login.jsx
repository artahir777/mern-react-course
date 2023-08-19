import React from "react";
import "./login.css";
import { useFormik, Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is Required").email("Invalid Email"),
    pass: Yup.string()
      .required("Password is required")
      .min(8, "At least 8 characters long")
      .max(15, "No more than 15 characters"),
    confirmPass: Yup.string()
      .required()
      .oneOf([Yup.ref("pass"), null], "Passwords must match")
      .min(8, "At least 8 characters long")
      .max(15, "No more than 15 characters"),
  });

  const formik = useFormik({
    initialValues: {
      pass: "",
      email: "",
      confirmPass: "",
    },
    onSubmit: (values) => {
      console.log("Values", values);
    },
  });

  return (
    <div>
      <h4>Login</h4>
      <p>This is Login Page</p>

      <Formik
        validationSchema={validationSchema}
        initialValues={{
          pass: "",
          email: "",
          confirmPass: "",
        }}
        onSubmit={(values) => console.log("Values", values)}
      >
        {({ errors, values, touched }) => (
          <Form className="login-form">
            <div className="form-field">
              <label className="form-label" htmlFor="email" id="email">
                Email
              </label>
              <Field className="input-field" name="email" />
            </div>
            {errors.email && touched.email && (
              <p className="form-error">{errors.email}</p>
            )}

            <div className="form-field">
              <label className="form-label" htmlFor="pass" id="pass">
                Password
              </label>
              <Field name="pass" className="input-field" />
            </div>
            {errors.pass && touched.pass && (
              <p className="form-error">{errors.pass}</p>
            )}

            <div className="form-field">
              <label
                className="form-label"
                htmlFor="confirmPass"
                id="confirmPass"
              >
                confirm Password
              </label>
              <Field name="confirmPass" className="input-field" />
            </div>
            {errors.confirmPass && touched.confirmPass && (
              <p className="form-error">{errors.confirmPass}</p>
            )}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
