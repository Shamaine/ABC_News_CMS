import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";
import "./singlePost.css";

export default function SinglePost() {
  //useLocation to get the post id path location
  const location = useLocation();
  //split the pathname and only get the id
  const path = location.pathname.split("/")[2];
  //Use Hook Set State to set the articles data from mongodb
  const [articles, setArticles] = useState([]);
  // use useEffect to get the articles id
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/articles/" + path);
      //set the page article to be the database article
      setArticles(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <div className="singlePostContainer">
          <img className="singlePostImg" src={articles.photo} alt="" />
          <div className="singlePostBanner">
            <span className="singlePostBannerText">{articles.banner}</span>
          </div>
        </div>
        <h1 className="singlePostTitle">
          {articles.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              {/*When the Journalist Name is clicked, show only the post created by the Journalist*/}
              <Link className="link" to={`/?user=${articles.username}`}>
                {articles.username}
              </Link>
            </b>
          </span>
          <span>{new Date(articles.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">{articles.details}</p>
      </div>
    </div>
  );
}
