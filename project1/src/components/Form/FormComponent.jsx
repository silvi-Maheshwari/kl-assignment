import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
// import transformData from "../../utils/transformData";
// import "./FormComponent.css";
import transformData from "./transform";

const FormComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { addUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const transformed = transformData(data);
    addUser(transformed);
    navigate("/dashboard");
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="beautiful-form" noValidate>
        <h2>Register</h2>

        <div className="form-group">
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Enter your name"
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format"
              }
            })}
            placeholder="Enter your email"
            type="email"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <input
            {...register("age", {
              required: "Age is required",
              valueAsNumber: true,
              min: {
                value: 1,
                message: "Age must be at least 1"
              }
            })}
            placeholder="Enter your age"
            type="number"
          />
          {errors.age && <p className="error">{errors.age.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
