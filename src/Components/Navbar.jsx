import React from "react";
import "../css/Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const Navigate = useNavigate();
  const Signout = () => {
    Navigate("/");
    localStorage.removeItem("current_user");
  };
  return (
    <nav>
      <div className="card d-flex">
        <div className="logo">
          <h3>Instagram</h3>
        </div>
        <div className="menu">
          <ul>
            <div>
              <i className="bi bi-house-door-fill"></i>
              <li>Home</li>
            </div>
            <div>
              <i className="bi bi-search"></i>
              <li>Search</li>
            </div>
            <div>
              <i className="bi bi-explicit"></i>
              <li>Explore</li>
            </div>
            <div>
              <i className="bi bi-camera-reels"></i>
              <li>Reels</li>
            </div>
            <div>
              <i className="bi bi-send"></i>
              <li>Messages</li>
            </div>
            <div>
              <i className="bi bi-heart"></i>
              <li>Notifications</li>
            </div>
            <div>
              <i className="bi bi-plus-square"></i>
              <li
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                Create
              </li>
            </div>
            <div>
              <i className="bi bi-person-circle"></i>
              <li>Profile</li>
            </div>
            <div>
              <i className="bi bi-box-arrow-left"></i>
              <button className="btn" onClick={Signout}>
                Signout
              </button>
            </div>
          </ul>
        </div>
        <div className="more">
          <ul>
            <i className="bi bi-list"></i>
            <li>More</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
