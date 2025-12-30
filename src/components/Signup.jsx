import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = () => {
    if (!username || !password) {
      setMessage("Please enter username and password.");
      return;
    }

    // Save user in localStorage
    const user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));

    setMessage("Signup successful! You can now login.");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="box">
      <div className="main">
        <h1>
          Signup
        </h1>
        <div className="tags">
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignup}>Signup</button>
          {message && <p style={{ color: "green" }}>{message}</p>}
          <p>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
