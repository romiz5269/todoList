import "../dist/css/style.css";
import { useEffect, useState } from "react";
import { BsXLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { delTodo, updateTodo } from "../features/TodoSlice";
import toast from "react-hot-toast";
function SingleTask({ todo }) {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    const deleted = dispatch(delTodo(todo.id));
    if (deleted) {
      toast.success("Task Successfully Deleted!");
    } else {
      toast.error("Failed to Delete Task");
    }
  };
  useEffect(() => {
    if (todo.status === "Active") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);
  const handleChange = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({
        ...todo,
        status: checked ? "InActive" : "Active",
      })
    );
  };
  const handleTaskColor = (color) => {
    dispatch(
      updateTodo({
        ...todo,
        color: color,
      })
    );
  };
  return (
    <div
      className="SingleTask"
      style={{ borderLeft: `5px solid ${todo.color}` }}
    >
      <div>
        <input type="checkbox" checked={checked} onChange={handleChange} />
      </div>
      <div className="TaskContent">
        <p>{todo.title}</p>
      </div>
      <div className="TaskFilerOption">
        <select onChange={(e) => handleTaskColor(e.target.value)}>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>
      <div className="TaskDelete">
        <span onClick={() => handleDelete(todo.id)}>
          <BsXLg />
        </span>
      </div>
    </div>
  );
}

export default SingleTask;
