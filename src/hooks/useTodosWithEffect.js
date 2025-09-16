import { useState, useEffect, useMemo } from "react";
import { flushSync } from "react-dom";
import { v4 } from "uuid";
import { getTodosFromLocalStorage } from "../utils/get-todos";
import { completed } from "../utils/completed";
import { filter } from "../utils/filter";

export const useTodosWithEffect = () => {
  const [todos, setTodos] = useState(getTodosFromLocalStorage);

  useEffect(() => {
    localStorage.setItem(`Todos`, JSON.stringify(todos));
  }, [todos]);

  const changeTodo = (id) => {
    document.startViewTransition(() => {
      flushSync(() => {
        setTodos(completed(true, id));
      });
    });
  };

  const changeCompletedTodo = (id) => {
    document.startViewTransition(() => {
      flushSync(() => {
        setTodos(completed(false, id));
      });
    });
  };

  const removeTodo = (id) => {
    setTodos(filter(id));
  };

  const addTodo = (title) => {
    setTodos((prev) => [{ id: v4(), title, isCompleted: false }, ...prev]);
  };

  return {
    todos,
    changeTodo,
    changeCompletedTodo,
    removeTodo,
    addTodo,
  };
};
