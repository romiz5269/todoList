import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../dist/css/style.css";
import { addTodo, fetchTodos } from "../features/TodoSlice";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
function TodoBody() {
  const [taskTitle, setTaskTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchTodos());
      setLoading(false);
    }, 1000);
  }, [dispatch, loading]);
  const handleAddTask = (e) => {
    e.preventDefault();
    setLoading(true);
    if (taskTitle) {
      setTimeout(() => {
        dispatch(
          addTodo({
            id: uuid(),
            title: taskTitle,
            status: "InActive",
            color: "black",
          })
        );
        setLoading(false);
        toast.success("Task Successfully Created!");
      },1000);

      setTaskTitle("");
      
    } else {
      toast.error("Failed To Create Task");
    }
  };
  return (
    <div className="container">
      <h1>TODO LIST PANEL</h1>

      <div className="TodoBody">
        <div className="TodoInput">
          <form onSubmit={(e) => handleAddTask(e)}>
            <input
              type="text"
              placeholder="New Task ..."
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </form>
          {loading ? <div className="loading"></div> : ""}
        </div>
        <TodoList />
      </div>
    </div>
  );
}

export default TodoBody;
