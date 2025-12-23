import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <div style={{ marginTop: "10px" }}>
      <span>{todo.title}</span>
      <button
        onClick={() => deleteTodo(todo.id)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
