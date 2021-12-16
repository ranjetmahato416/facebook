import React, { useState } from "react";

function Body() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  function Registeruser(event) {
    event.preventDefault();

    var users = JSON.parse(localStorage.getItem("users") || "[]");
    var newuser = {
      firstname: fname,
      lastname: lname,
      username: username,
      password: password,
      confirmpassword: confirmpassword,
    };

    users.push(newuser);
    localStorage.setItem("users", JSON.stringify(users));
  }
  

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-7">
          {/* <img src="https://static.dezeen.com/uploads/2021/11/meta-facebook-rebranding-name-news_dezeen_2364_col_hero2.jpg" alt="" /> */}
          <img
            src="https://thumbs.dreamstime.com/b/facebook-logo-icon-voronezh-russia-january-blue-square-reflection-shadow-171161171.jpg"
            alt=""
          />
        </div>
        <div className="col-md-4">
          <form onSubmit={Registeruser}>
            <h1>Register</h1>
            <input
              type="text"
              placeholder="first name"
              className="form-control"
              value={fname}
              onChange={(e) => {
                setfname(e.target.value);
              }}
            />
            <br />
            <input
              type="text"
              placeholder="last name"
              className="form-control"
              value={lname}
              onChange={(e) => {
                setlname(e.target.value);
              }}
            />
            <br />
            <input
              type="text"
              placeholder="username"
              className="form-control"
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
            <br />
            <input
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />{" "}
            <br />
            <input
              type="password"
              placeholder="confirm password"
              className="form-control"
              value={confirmpassword}
              onChange={(e) => {
                setconfirmpassword(e.target.value);
              }}
            />
            <br />
            <input type="submit" className="btn btn-primary" value="SIGN UP" />
          </form>
        </div>
      </div>
    </div>
  );
}
export default Body;
