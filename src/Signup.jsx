import React from "react";
import "./App.css";
import { Link } from "react-router-dom"; // Import Link
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <center>
      <div className="contains">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="h3 mb-3 fw-normal">Sign in</h1>
          <Link className="crossbtn" to="/Login">
            X
          </Link>

          <div className="form-floating mail">
            <input
              type="name"
              className="form-control"
              id="floatingInput"
              placeholder="nameexample.com"
              {...register("name", { required: true })}

            />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating mail">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              {...register("email", { required: true })}

            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mail">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              {...register("password", { required: true })}

            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>

          <div className="btn">
            <button className="btn btn-primary w-100 py-2" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </center>
  );
}

export default Signup;
