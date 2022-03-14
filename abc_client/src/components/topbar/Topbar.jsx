import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
export default function Topbar() {
  //Define Journalists and Admin as user Logged In status
  //in local storage
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const publicPic = "http://localhost:5000/images/";
  return (
    <div className="top">
      <div className="topLeft">
        <div className="topLeftWrapper">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
        </div>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          {/*If User is logged in, Display additional list: Write, 
          Register and LOGOUT Tab*/}
          {user && (
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
          )}
          {user && (
            <Link className="link" to="/">
              <li className="topListItem" onClick={handleLogout}>
                {user && "LOGOUT"}
              </li>
            </Link>
          )}
          {/*Only Display Register Tab if user is an admin*/}
          {user?.isAdmin && (
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img className="topImg" src={publicPic + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
