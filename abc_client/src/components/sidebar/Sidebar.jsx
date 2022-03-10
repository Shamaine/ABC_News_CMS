import { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { Context } from "../../context/Context";

export default function Sidebar() {
  //Fetch category data from database using Use Effect and UseState
  const [cats, setCats] = useState([]);
  //Define Journalists and Admin as user Logged In status
  const { user } = useContext(Context);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">
          {user && (
            <Link className="link" to="/addcategories">
              <i className="addIcon fas fa-plus"></i>
            </Link>
          )}
          NEWS CATEGORIES
        </span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <li className="sidebarListItem">
              {user && (
                <Link className="link" to="/upcategories">
                  <i className="catIcon far fa-edit"></i>
                </Link>
              )}
              {user && <i className="catIcon far fa-trash-alt"></i>}
              {/*When the categories name  is clicked, show only the post created by category*/}
              <Link className="link" to={`/?cat=${c.name}`}>
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
