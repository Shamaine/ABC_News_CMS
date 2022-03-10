import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <div className="singlePostContainer">
          <img
            className="singlePostImg"
            src="https://images.unsplash.com/photo-1645758508038-d0ef26918781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className="singlePostBanner">
            <span className="singlePostBannerText">Breaking!</span>
          </div>
        </div>
        <h1 className="singlePostTitle">
          Write A News
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Admin">
                Admin
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          An About Me page is one of the most important parts of your portfolio,
          website, or blog. This page is where prospective employers, potential
          clients, website users, and other professional and personal
          connections go to learn about who you are and what you do. And it's an
          ideal resource for promoting your professional brand. It can be
          challenging to write about yourself. However, the good news is if you
          follow the formula and tips below, you should be able to generate an
          engaging About Me statement without too much of a struggle.
          <br />
          <br />
          An About Me page is one of the most important parts of your portfolio,
          website, or blog. This page is where prospective employers, potential
          clients, website users, and other professional and personal
          connections go to learn about who you are and what you do. And it's an
          ideal resource for promoting your professional brand. It can be
          challenging to write about yourself. However, the good news is if you
          follow the formula and tips below, you should be able to generate an
          engaging About Me statement without too much of a struggle.
        </p>
      </div>
    </div>
  );
}
