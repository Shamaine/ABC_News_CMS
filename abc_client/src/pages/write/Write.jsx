import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
export default function Write() {
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [banner, setBanner] = useState("");
  const [categories, setCategory] = useState("");
  const [file, setFile] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const newPost = {
      username: user.username,
      title,
      banner,
      details,
      categories,
    };
    if (file) {
      const data = new FormData();
      //Add Date now to prevent same user upload same image again
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        setError(true);
      }
    }
    try {
      const res = await axios.post("/articles", newPost);
      window.location.replace("/articles/" + res.data._id);
    } catch (err) {
      setError(true);
    }
  };
  //create URL for image file
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <div className="inputWrapper">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            {/*Set File to see upload images on website*/}

            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />

            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="writeInput"
              placeholder="Banner"
              type="text"
              autoFocus={true}
              onChange={(e) => setBanner(e.target.value)}
            />
            <input
              className="writeInput"
              placeholder="Categories"
              type="text"
              autoFocus={true}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
        {error && (
          <span style={{ color: "red", marginTop: "10px" }}>
            Article Creation Failed!
          </span>
        )}
      </form>
    </div>
  );
}
