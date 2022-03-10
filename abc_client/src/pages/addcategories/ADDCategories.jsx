import "./categories.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function ADDCategory() {
  return (
    <div className="categories">
      <div className="categoriesWrapper">
        <div className="categoriesTitle">
          <span className="categoriesTitleUpdate">Add Categories</span>
        </div>
        <form className="categoriesForm">
          <label>Category Name:</label>
          <input
            className="categoryInput"
            placeholder="Name"
            type="text"
            autoFocus={true}
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
