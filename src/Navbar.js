import React, { useState } from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  let navigate = useNavigate();

  function logout() {
      localStorage.removeItem('logged in')
      navigate('/')
      window.location.reload(true)

  }

  function login() {
    var users = JSON.parse(localStorage.getItem("users"));
    var i = 0;
    for (var user of users) {
      if (user.username == username && user.password == password) {
        i++;
      }
    }
    if (i == 1) {
      alert("Login successful");
      localStorage.setItem("logged in", "logged in");
      navigate("/dashboard");
      window.location.reload()
    } else {
      alert("Login failed.");
    }
  }

  return (
    <div>
      <div className="row nav">
        <div className="col-md-6">
          <h1>Facebook</h1>
        </div>
        <div className="col-md-6">
          {(() => {
            if (localStorage.getItem("logged in")) {
              return <button onClick={logout}>LOG OUT </button>;
            } 
            else {
              return (
                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => {
                      setusername(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                  <button onClick={login}>Login</button>
                </div>
              );
            }
          })()}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
