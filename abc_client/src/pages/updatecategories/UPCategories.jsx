import { useContext } from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import "./categories.css";

export default function UPCategory() {
  //Fetch category data from database using Use Effect and UseState
  const [categories, setCats] = useState([]);
  const [name, setName] = useState("");
  //useLocation to get the post id path location
  const location = useLocation();
  //split the pathname and only get the id
  const path = location.pathname.split("/")[2];

  //Use Hook Set State to set the articles data from mongodb
  const { user } = useContext(Context);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories/" + path);
      //set categories data to be database data
      setCats(res.data);
      console.log(res.data);
    };
    getCats();
  }, [path]);

  //Handle Categories Delete by id
  const handleDelete = async () => {
    try {
      await axios.delete(`/categories/${categories._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };
  //Handle Categories Update
  //When Update Button is clicked
  //Reset Update mode back to false
  const handleUpdate = async () => {
    try {
      await axios.put(`/categories/${categories._id}`, {
        name,
      });
    } catch (err) {}
  };

  return (
    <div className="categories">
      <div className="categoriesWrapper">
        <div className="categoriesTitle">
          <span className="categoriesTitleUpdate">Update Categories</span>
        </div>
        <form className="categoriesForm">
          <label>Category Name:</label>
          <input
            className="categoryInput"
            value={name}
            type="text"
            autoFocus={true}
            onChange={(e) => setName(e.target.value)}
          />

          <button
            className="categoriesSubmitButton"
            type="submit"
            onClick={handleUpdate}
          >
            Update
          </button>
          <button
            className="categoriesSubmitButton"
            type="submit"
            onClick={handleDelete}
          >
            Delete
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
