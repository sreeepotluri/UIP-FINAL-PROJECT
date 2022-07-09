import { fetchData } from "../../main.js";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../context/userContext.js";
import axios from "axios";
import Profile from "./Profile";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(username, password);

    axios
      .post(
        "/user/login",
        {
          username: username, //sreeepotluri
          password: password, //pancakes
        },
        {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        }
      )
      .then((response) => {
        console.log(response);
        nav("/Profile");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="Login">
       <h2>SIGN IN</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Username">Enter Username</label>
          <input
            className="form-control"
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Enter Password</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          SIGN IN
        </button>
      </form>
    </div>
  );
};

export default Login;