import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../redux/actions";
import { FaSearch } from "react-icons/fa";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";

function Todo() {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  const handleSearchTerm = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded shadow-lg border-2">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center text-orange-400">
        PERSONAL TODO APP
      </h2>

      {/* input text btn */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          name="addTodoInput"
          id="addTodoInput"
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-gray-200 focus:outline-none focus:border-blue-500"
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTodoClick}
        >
          <FaPlus />
        </button>
      </div>

      {/* filter and search term */}
      <div className="flex items-center justify-between">
        <FilterButton/>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearchTerm(e.target.value)}
            name="addTodoInput"
            id="addTodoInput"
            placeholder="Search"
            className="flex-grow p-2 border-b-2 border-gray-200 focus:outline-none focus:border-blue-500"
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* TodoList */}
      <TodoList/>
    </div>
  );
}

export default Todo;
