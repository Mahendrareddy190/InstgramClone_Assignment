import React from "react";
import "../css/Header.css";
const Header = ({ fullname }) => {
  return (
    <div className="display-in-mobile">
      <div className="Header d-flex">
        <div className="logo">
          <h3>Instagram</h3>
        </div>
        <div className="search" style={{ fontSize: "25px" }}>
          <h3>
            <i className="bi bi-person-circle mx-2"></i> {fullname}
          </h3>
        </div>
        <i className="bi bi-heart"></i>
      </div>
    </div>
  );
};

export default Header;
