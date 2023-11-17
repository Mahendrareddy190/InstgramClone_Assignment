import React from "react";
import "../css/Nav1.css";
const Nav1 = () => {
  return (
    <div className="Nav1">
      <ul>
        <li>
          <i className="bi bi-house-door-fill"></i>
        </li>
        <li>
          <i className="bi bi-explicit"></i>
        </li>
        <li>
          <i className="bi bi-camera-reels"></i>
        </li>
        <li
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          <i className="bi bi-plus-square"></i>
        </li>
        <li>
          <i className="bi bi-send"></i>
        </li>
        <li>
          <i className="bi bi-person-circle"></i>
        </li>
      </ul>
    </div>
  );
};

export default Nav1;
