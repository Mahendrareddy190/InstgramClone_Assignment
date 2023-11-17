import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import swal from "sweetalert";

const SignIn = () => {
  // const users_data = useSelector((state) => state.users_data);
  if (localStorage["user_data"]) {
    var users_data = JSON.parse(localStorage.getItem("user_data"));
  }
  const Navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const handleUserData = (e) => (name) => {
    setUser({ ...user, [name]: e.target.value });
  };
  const check = (users_data) => {
    const is_user_aviable = users_data.filter(
      (u) => u.email === user.email && u.password === user.password
    );
    return [is_user_aviable.length === 0 ? false : true, is_user_aviable];
  };
  const submit = (e) => {
    e.preventDefault();
    const new_user = check(users_data);
    if (new_user[0]) {
      localStorage.setItem("current_user", JSON.stringify(new_user[1][0]));
      Navigate("/home");
    } else {
      swal("Invalid", "Enter valid details", "info");
    }
  };
  return (
    <div className="signup">
      <div className="card signup-form">
        <h3 style={{ margin: "0 0 20px 50px" }}>Instgram</h3>
        <form action="">
          <input
            type="email"
            className="form-control"
            placeholder="email address"
            name={email}
            onChange={(e) => handleUserData(e)("email")}
          />
          <input
            type="password"
            className="form-control"
            placeholder="password"
            name={password}
            onChange={(e) => handleUserData(e)("password")}
          />
          <button className="btn btn-primary" onClick={submit}>
            Log in
          </button>
        </form>
      </div>
      <div className="card" style={{ padding: "10px 45px", margin: "10px" }}>
        <h6>
          Don't have an account?
          <a className="text-primary mx-2" href="/signup">
            Sign up
          </a>
        </h6>
      </div>
    </div>
  );
};

export default SignIn;
