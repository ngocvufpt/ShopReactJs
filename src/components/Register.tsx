import React from "react";
import { useForm } from "react-hook-form";

import intance from "../services";
import { useNavigate } from "react-router-dom";
import { Iuser } from "../interfaces/Product";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iuser>();
  const onSubmit = (user: Iuser) => {
    (async () => {
      const { data } = await intance.post("/register", user);
      alert("dangky thanh cong");
      navigate("/login");
    })();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="fs-3 mb-3">Register</h1>
        <div className="mb-3">
          {" "}
          <div className="form-group ">
            <label htmlFor="username" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              {...register("username")}
            />
            {errors.username && (
              <p className="text-danger">username is required</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <p className="text-danger">email is required</p>}
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="form-control"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
            />
            {errors.password && <p className="text-danger">lon hon 6 chu so</p>}
          </div>
        </div>

        <button className="btn btn-primary mb-3">Submit</button>
      </form>
    </div>
  );
};

export default Register;
