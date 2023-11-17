import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../css/Signup.css";
import { Adduser } from "../Redux/users";
import swal from "sweetalert";

const Signup = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    fullname: "",
    username: "",
    password: "",
  });
  const { email, fullname, username, password } = user;
  const handleUserData = (e) => (name) => {
    setUser({ ...user, [name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    if (!(user.email && user.fullname && user.password && user.username)) {
      swal("Warning", "All fields required", "info");
    } else {
      dispatch(Adduser(user));
      swal("Good job!", "Sucessfully submitted", "success");
    }
  };
  return (
    <div className="signup">
      <div className="card signup-form">
        <h3 style={{ margin: "0 0 20px 50px" }}>Instgram</h3>
        <form>
          <input
            type="email"
            className="form-control"
            placeholder="email address"
            name={email}
            required
            onChange={(e) => handleUserData(e)("email")}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            name={fullname}
            onChange={(e) => handleUserData(e)("fullname")}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name={username}
            onChange={(e) => handleUserData(e)("username")}
          />
          <input
            type="password"
            name={password}
            className="form-control"
            placeholder="password"
            onChange={(e) => handleUserData(e)("password")}
          />
          <button onClick={submit} className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
      <div className="card login-redirect">
        <h6>
          Have an account?
          <a className="text-primary mx-2" href="/">
            Log in
          </a>
        </h6>
      </div>
    </div>
  );
};

export default Signup;
