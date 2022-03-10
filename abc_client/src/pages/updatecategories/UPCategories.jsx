import "./categories.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function UPCategory() {
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
            placeholder="Name"
            type="text"
            autoFocus={true}
          />
          <button className="categoriesSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
