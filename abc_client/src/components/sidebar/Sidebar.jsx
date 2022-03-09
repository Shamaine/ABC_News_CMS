import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">NEWS CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <i className="catIcon far fa-edit"></i>
            <i className="catIcon fas fa-trash"></i>
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <i className="catIcon far fa-edit"></i>
            <i className="catIcon fas fa-trash"></i>
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <i className="catIcon far fa-edit"></i>
            <i className="catIcon fas fa-trash"></i>
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <i className="catIcon far fa-edit"></i>
            <i className="catIcon fas fa-trash"></i>
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <i className="catIcon far fa-edit"></i>
            <i className="catIcon fas fa-trash"></i>
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <i className="catIcon far fa-edit"></i>
            <i className="catIcon fas fa-trash"></i>
            <Link className="link" to="/posts?cat=Cinema">
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
