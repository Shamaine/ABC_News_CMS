import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

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

    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      //Refer back to api route file of update user by userId
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
          {error && (
            <span style={{ color: "red", marginTop: "10px" }}>{error}</span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
