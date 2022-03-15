import axios from "axios";
import { useState } from "react";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  //preventDefault is used to prevent the webpage refresh when clicked
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    //validate username
    if (!username) {
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Username cannot be blank");
    } else if (username.length < 3) {
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Username must be more than 3 characters");
    }
    //validate email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Email cannot be blank");
    } else if (!regex.test(email)) {
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Invalid email format!");
    }
    //validate password
    if (!password) {
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError(" Password cannot be blank");
    } else if (password.length < 3) {
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Password must be more than 3 characters");
    }

    try {
      //Axios is used to make HTTP requests from node. js and perform CRUD operations.
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      //When successful register user, back to homepage
      res.data && window.location.replace("/");
    } catch (err) {
      //If there is an error setError to true
      setError(true);
    }
  };
  //When change Input, It will automatically set update the Username,
  //Email and Password with OnChange
  //onSubmit => When the form is submitted, execute function handleSubmit
  return (
    <div className="register">
      <div className="container">
        <div className="formWrapper">
          <span className="registerTitle">Register</span>
          <form className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>

            <input
              className="registerInput"
              type="text"
              placeholder="Enter your username..."
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>Email</label>
            <input
              className="registerInput"
              type="text"
              placeholder="Enter your email..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              className="registerInput"
              type="password"
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="registerButton">Register</button>
          </form>
          {error && (
            <span style={{ color: "red", marginTop: "10px" }}>{error}</span>
          )}
        </div>
      </div>
    </div>
  );
}
