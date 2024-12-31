import React from "react";
import { FaCheck, FaToggleOff, FaToggleOn, FaTrash } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { markCompleted, markIncompleted, removeTodo, toggleTodo } from "../redux/actions";
import { FaTimes } from "react-icons/fa";

function TodoItem({ todo, index }) {
  const dispatch = useDispatch();
  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}</span>
        <span
          className={`mr-4 ${
            todo.completed ? "line-through text-red-400" : " "
          }`}
        >
          {todo.text}
        </span>
      </div>

      <div>
        <button
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>

        <button
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 py-1 px-1 rounded"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash/>
        </button>

        {
            !todo.completed &&(
                <button className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded" onClick={() => dispatch(markCompleted(index))}><FaCheck/></button>
            )
        }

        {       
            todo.completed &&(
                <button className="mr-2 text-sm bg-yellow-500 text-white sm:px-2 py-1 px-1 rounded" onClick={() => dispatch(markIncompleted(index))}><FaTimes/></button>
            )
        }
      </div>
    </li>
  );
}

export default TodoItem;
