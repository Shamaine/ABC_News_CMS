import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ article }) {
  const publicPic = "http://localhost:5000/images/";
  return (
    <div className="post">
      <div className="container">
        <img className="postImg" src={publicPic + article.photo} alt="" />
        <div className="banner">
          <span className="bannerText">{article.banner}</span>
        </div>
      </div>

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">{article.categories}</span>
        </div>
        <Link to={`/articles/${article._id}`} className="link">
          <span className="postTitle">{article.title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(article.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{article.details}</p>
    </div>
  );
}
