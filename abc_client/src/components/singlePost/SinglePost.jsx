import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";
import axios from "axios";
import "./singlePost.css";

export default function SinglePost() {
  //useLocation to get the post id path location
  const location = useLocation();
  //split the pathname and only get the id
  const path = location.pathname.split("/")[2];
  //Use Hook Set State to set the articles data from mongodb
  const [articles, setArticles] = useState([]);
  //Update Article Title Use and setState
  const [title, setTitle] = useState("");
  //Update Article Banner
  const [banner, setBanner] = useState("");
  //Update Article Details
  const [details, setDetails] = useState("");
  //Update Article Category
  const [categories, setCategory] = useState("");
  //Use Update Mode boolean to check if update icon is
  //clicked
  const [updateMode, setUpdateMode] = useState(false);

  // use useEffect to get the articles id
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/articles/" + path);
      //set the page article to be the database article
      setArticles(res.data);
      //set title,banner,category and details so that
      //all this data will be fetch to text area for update
      // allow text to be editable
      setTitle(res.data.title);
      setBanner(res.data.banner);
      setCategory(res.data.categories);
      setDetails(res.data.details);
    };
    getPost();
  }, [path]);
  //Handle Article Delete by article id
  const handleDelete = async () => {
    try {
      await axios.delete(`/articles/${articles._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };
  //Handle Article Update
  //When Update Button is clicked
  //Reset Update mode back to false
  const handleUpdate = async () => {
    try {
      await axios.put(`/articles/${articles._id}`, {
        username: user.username,
        title,
        banner,
        details,
        categories,
      });
      //Refresh the page to see upadated content
      window.location.reload();
      setUpdateMode(false);
    } catch (err) {}
  };

  //Define Journalists and Admin as user Logged In status
  //in local storage
  //If user logged in, show edit and delete icons
  const { user } = useContext(Context);
  //Direct to  server local storage image link
  const publicPic = "http://localhost:5000/images/";
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <div className="singlePostContainer">
          {articles.photo && (
            <img
              className="singlePostImg"
              src={publicPic + articles.photo}
              alt=""
            />
          )}
          {updateMode ? (
            <input
              type="text"
              value={banner}
              className="singlePostBannerInput"
              autoFocus={true}
              onChange={(e) => setBanner(e.target.value)}
            />
          ) : (
            <div className="singlePostBanner">
              <span className="singlePostBannerText">{articles.banner}</span>
            </div>
          )}
        </div>
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {articles.title}
            <div className="singlePostEdit">
              {articles.username === user?.username && (
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
              )}
              {articles.username === user?.username && (
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              )}
            </div>
          </h1>
        )}
        {updateMode ? (
          <input
            type="text"
            value={categories}
            className="singlePostCatInput"
            autoFocus={true}
            onChange={(e) => setCategory(e.target.value)}
          />
        ) : (
          <div className="singlePostCat">
            <span className="postCat">{articles.categories}</span>
          </div>
        )}
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
        {updateMode ? (
          <textarea
            className="singlePostDetailInput"
            value={details}
            autoFocus={true}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        ) : (
          <p className="singlePostDesc">{articles.details}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
