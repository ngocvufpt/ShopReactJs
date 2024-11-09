import React from "react";
import { useForm } from "react-hook-form";

import intance from "../services";
import { useNavigate } from "react-router-dom";
import { Iuser } from "../interfaces/Product";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iuser>();
  const onSubmit = (user: Iuser) => {
    (async () => {
      const { data } = await intance.post("/login", user);
      alert("dang nhap thanh cong");
      navigate("/");
    })();
  };
  return (
    <div>
      <form className="py-4" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="fs-3 mb-3">Login</h1>
        <div className="mb-3">
          {" "}
          <div className="form-group mb-3">
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
            <label htmlFor="" className="form-label">
              Password
            </label>
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

        <button className="btn btn-primary ">Submit</button>
      </form>
    </div>
  );
};

export default Login;
