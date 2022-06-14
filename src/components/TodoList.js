import SingleTask from "./SingleTask";
import FiltersTask from "./FiltersTask";
import { useSelector } from "react-redux";
import { showTodo } from "../features/TodoSlice";
function TodoList() {
  const todolist = useSelector(showTodo);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const filterColor = useSelector((state) => state.todo.filterColor);

  const filteredTodoList = todolist
    .filter((item) => {
      if (filterStatus === "All") {
        return true;
      }
      return item.status === filterStatus;
    })
    .filter((item2) => {
      if (filterColor === "All") {
        return true;
      }
      return item2.color === filterColor;
    });
  return (
    <div className="TodoList">
      <div className="TodoItem">
        {filteredTodoList && filteredTodoList.length > 0 ? (
          filteredTodoList.map((todo) => (
            <SingleTask key={todo.id} todo={todo} />
          ))
        ) : (
          <div className="NoTask">
            <p>Tasks Not Found ... </p>
          </div>
        )}
      </div>
      <FiltersTask />
    </div>
  );
}

export default TodoList;
