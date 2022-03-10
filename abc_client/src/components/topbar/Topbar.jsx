import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  //Define Journalists and Admin as user Logged In status
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
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
          {user && <li className="topListItem">LOGOUT</li>}
          {user && (
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
          <Link
            className="link"
            style={{ textDecoration: "none", color: "inherit" }}
            to="/settings"
          >
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          {
            /*Else,  Display Login Tab*/
          }(
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
            </ul>
          )
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
