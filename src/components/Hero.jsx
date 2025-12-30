import React from "react";
import { Route, Routes } from "react-router-dom";
import "../hero.css";

const hero = () => {
  return (
    <div>
      <div className="box">
        <input
          type="text"
          placeholder="Enter Your Hero name"
          style={{ height: "60px", width: "200px" }}
        />

        <button style={{ height: "60px", width: "80px", marginLeft: "20px" }}>
          Search
        </button>
      </div>
    </div>
  );
};

export default hero;
