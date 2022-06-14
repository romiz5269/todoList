import { useDispatch} from "react-redux";
import "../dist/css/style.css";
import { filterByColor, filterByStatus } from "../features/TodoSlice";
function FiltersTask() {
  const dispatch = useDispatch();
  const handleStatusFilter =(status)=>{
    dispatch(filterByStatus(status))
  }
  const handleColorFilter=(color)=>{
    dispatch(filterByColor(color))
  }
  return (
    <div className="FiltersTask">
      <div className="FiltersHeader">
        <h2>Filter Options :</h2>
      </div>
      <div className="FiltersOptions">
        <div
          className="FiltersStatus"
          onChange={(e) => handleStatusFilter(e.target.value)}
        >
          <input type="radio" value="All" name="status" /> All
          <input type="radio" value="Active" name="status" /> Active
          <input type="radio" value="InActive" name="status" /> InActive
        </div>
        <div className="FilterColors">
          <div onChange={(e) => handleColorFilter(e.target.value)}>
            <input type="radio" value="All" name="color" />
            <span>All Colors</span>
          </div>
          <div onChange={(e) => handleColorFilter(e.target.value)}>
            <input type="radio" value="black" name="color" />
            <span>Black</span>
          </div>
          <div onChange={(e) => handleColorFilter(e.target.value)}>
            <input type="radio" value="red" name="color" />
            <span>Red</span>
          </div>
          <div onChange={(e) => handleColorFilter(e.target.value)}>
            <input type="radio" value="yellow" name="color" />
            <span>Yellow</span>
          </div>
          <div onChange={(e) => handleColorFilter(e.target.value)}>
            <input type="radio" value="green" name="color" />
            <span>Green</span>
          </div>
          <div onChange={(e) => handleColorFilter(e.target.value)}>
            <input type="radio" value="blue" name="color" />
            <span>Blue</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltersTask;
