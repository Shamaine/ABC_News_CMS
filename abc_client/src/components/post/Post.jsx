import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img }) {
  return (
    <div className="post">
      <div className="container">
        <img className="postImg" src={img} alt="" />
        <div className="banner">
          <span className="bannerText">Live Now!</span>
        </div>
      </div>

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            This is a default Post Title
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        People who love cats really love them, and people who don't like cats
        really don't like them—there's no in-between. As divisive as these
        creatures are, every cat lover understands why they make such amazing
        pets. Still, it's not always easy to put into words why you're so
        obsessed with your four-legged furball. (Cats are creatures of mystery,
        after all!) Because felines don't have the same reputation as other
        universally adored animals (we're looking at you, dogs) it's important
        to represent them well. The best way to do that? With an adorable
        Instagram post of your cat, obviously.
      </p>
    </div>
  );
}
