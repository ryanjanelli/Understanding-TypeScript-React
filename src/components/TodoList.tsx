import React from "react";
import './TodoList.css'

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          {/* button technique using bind */}
          {/* <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
            X DELETE
          </button> */}
          <button onClick={() => props.onDeleteTodo(todo.id)}>X DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
