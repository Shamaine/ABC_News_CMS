import { useContext, useState } from "react";
import axios from "axios";
import "./categories.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";

export default function ADDCategory() {
  //Use State category'name' here must be the same as the 'name'
  //defined at server CategorySchema
  const [name, setcatName] = useState("");
  const { user } = useContext(Context);

  //Handle Add Categories Button
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCat = {
      username: user.username,
      name,
    };
    try {
      const res = await axios.post("/categories", newCat);
      res.data && window.location.replace("/");
    } catch (err) {}
  };
  return (
    <div className="categories">
      <div className="categoriesWrapper">
        <div className="categoriesTitle">
          <span className="categoriesTitleUpdate">Add Categories</span>
        </div>
        <form className="categoriesForm" onSubmit={handleSubmit}>
          <label>Category Name:</label>
          <input
            className="categoryInput"
            placeholder="Name"
            type="text"
            autoFocus={true}
            onChange={(e) => setcatName(e.target.value)}
          />
          <button className="categoriesSubmitButton" type="submit">
            Add
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
