import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  //Define Journalists and Admin as user Logged In status
  const user = true;
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
          <li className="sidebarListItem">
            {user && (
              <Link className="link" to="/upcategories">
                <i className="catIcon far fa-edit"></i>
              </Link>
            )}
            {user && <i className="catIcon far fa-trash-alt"></i>}
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            {user && (
              <Link className="link" to="/upcategories">
                <i className="catIcon far fa-edit"></i>
              </Link>
            )}
            {user && <i className="catIcon far fa-trash-alt"></i>}
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            {user && (
              <Link className="link" to="/upcategories">
                <i className="catIcon far fa-edit"></i>
              </Link>
            )}
            {user && <i className="catIcon far fa-trash-alt"></i>}
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            {user && (
              <Link className="link" to="/upcategories">
                <i className="catIcon far fa-edit"></i>
              </Link>
            )}
            {user && <i className="catIcon far fa-trash-alt"></i>}
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            {user && (
              <Link className="link" to="/upcategories">
                <i className="catIcon far fa-edit"></i>
              </Link>
            )}
            {user && <i className="catIcon far fa-trash-alt"></i>}
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            {user && (
              <Link className="link" to="/upcategories">
                <i className="catIcon far fa-edit"></i>
              </Link>
            )}
            {user && <i className="catIcon far fa-trash-alt"></i>}
            <Link className="link" to="/posts?cat=Food">
              Food
            </Link>
          </li>
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
