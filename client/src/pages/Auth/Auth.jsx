import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, signUp } from "../../actions/AuthAction";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  });
  const [confirmpass, setConfirmPass] = useState(true);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      {
        dispatch(login(data));
      }
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpass: "",
    });
  };

  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Geez</h1>
          <h6>Make fly your thought super fast</h6>
        </div>
      </div>
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Log In"}</h3>
          {isSignUp && (
            <div>
              {" "}
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              placeholder="User name"
              className="infoInput"
              name="username"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Pass word"
              className="infoInput"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm pass word"
                className="infoInput"
                name="confirmpass"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>

          <span
            style={{
              display: confirmpass ? "none" : "block",
              color: "red",
              fontsize: "12px",
              alighself: "flex-end",
              marginRight: "5px",
            }}
          >
            *Passwords are not same.
          </span>
          <div>
            <span
              className="drv"
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
              style={{ cursor: "pointer" }}
            >
              {isSignUp
                ? "Already have an account? LOGIN!"
                : "Don't have an account? Sign Up!"}
            </span>
          </div>
          <button className="button infoButton" type="submit">
            {isSignUp ? "Sign up" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
