import React from "react";
import "../css/Suggested_creaters.css";
const Suggested_creaters = () => {
  return (
    <div className="suggested card  rounded">
      <div className="head" style={{ marginBottom: "50px" }}>
        <span>suggested for you</span>
        <span style={{ marginLeft: "70px" }}>See All</span>
      </div>
      <div className="profiles">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKf6AIxapOMdJYTcj1FSWE5-UPSm99lxns5w&usqp=CAU"
          alt="monkey"
        />
        <span>systems</span>
        <p>Follow</p>
      </div>
      <div className="profiles">
        <img
          style={{ margin: "10px 29px 0 5px" }}
          src="https://s3-ap-south-1.amazonaws.com/internshala-uploads-new/google_logo/46l73x2z3ve-14418.jpeg"
          alt="Arnifi"
        />
        <span style={{ margin: "10px 65px 0 5px" }}>Arnifi</span>
        <p>Follow</p>
      </div>
      <div className="profiles">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKnGZQfGZl7AaWeLFEUphgLqbbGYGOvwyvA&usqp=CAU"
          alt="monkey"
        />
        <span>luxalgo</span>
        <p>Follow</p>
      </div>
      <div className="profiles">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPPy1Imo3qPgS5-wXM_4uarqssaSKql1EJg&usqp=CAU"
          alt="beast"
        />
        <span style={{ margin: "10px 25px 0 5px" }}>MRBEAST</span>
        <p>Follow</p>
      </div>
    </div>
  );
};

export default Suggested_creaters;
