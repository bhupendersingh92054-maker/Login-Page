// import React from "react";
// import { Link } from "react-router-dom";
// import "../login.css";

// const login = () => {
//   return (
//     <div className="box">
//       <div className="main">
//         <h1
//           style={{
//             color: "white",
//             fontFamily: "sans-serif",
//             padding: "10px",
//             color:'black',
//           }}
//         >
//           Please Login
//         </h1>
//        <div className="tags">
//          <input
//           type="text"
//           placeholder="Please Enter Your UserName."
//         ></input>
//         <input
//           type="text"
//           placeholder="Enter Your Password"
//         ></input>
//         <Link to="/Hero">
//           <button>
//             Login
//           </button>
//         </Link>
        
//         <p>
//             Don't have an account? <Link to="/signup">Signup</Link>
//           </p>

//        </div>
//       </div>
//     </div>
//   );
// };

// export default login;










import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      username === storedUser.username &&
      password === storedUser.password
    ) {
      // login success → enable link
      window.location.href = "/hero"; // simple way without useNavigate
    } else {
      setError(true);
    }
  };

  return (
    <div className="box">
      <div className="main">
        <h1 style={{ color: "black", fontFamily: "sans-serif", padding: "10px" }}>
          Please Login
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
          <button onClick={handleLogin}>Login</button>
          {error && <p style={{ color: "red" }}>Invalid username or password</p>}
          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

