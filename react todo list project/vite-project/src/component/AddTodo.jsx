import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../features/todo/todo-slice";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    dispatch(addTodo(trimmed));
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8 drop-shadow-sm">
          📝 Todo App
        </h1>

        {/* Add Todo Form */}
        <form
          onSubmit={addTodoHandler}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write your task here..."
            className="flex-grow w-full sm:w-auto px-5 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700 bg-gray-50 transition duration-300"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition duration-300"
          >
            ➕ Add
          </button>
        </form>

        {/* Todo List */}
        {todos.length === 0 ? (
          <p className="text-center text-gray-500 italic animate-pulse">
            No todos yet. Start adding something! 🚀
          </p>
        ) : (
          <ul className="space-y-4">
            {todos.map((todo, index) => (
              <li
                key={todo.id}
                className="group flex justify-between items-center px-5 py-4 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-xl hover:border-indigo-400 transition duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-gray-800 font-medium group-hover:text-indigo-600 transition">
                  {todo.text}
                </span>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md hover:scale-105 transition duration-300"
                >
                  ❌ Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
