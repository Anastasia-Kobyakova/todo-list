import { useMemo } from "react";
import { CreateTodoField } from "./create-todo-field/CreateTodoField";
import { useTodosWithEffect } from "../../../hooks/useTodosWithEffect";
import { TodoList } from "./TodoList";

export const Home = () => {
  const { todos, addTodo, removeTodo, changeTodo, changeCompletedTodo } =
    useTodosWithEffect();

  const { completedTodos, uncompletedTodos } = useMemo(() => {
    const completedTodos = [];
    const uncompletedTodos = [];

    for (const todo of todos) {
      (todo.isCompleted ? completedTodos : uncompletedTodos).push(todo);
    }

    return { completedTodos, uncompletedTodos };
  }, [todos]);

  return (
    <div className=" text-white w-4/5 mx-auto flex flex-col h-full">
      <h1 className="text-2xl font-bold text-center mb-10">Todos</h1>
      <CreateTodoField addTodo={addTodo} />
      <TodoList
        items={uncompletedTodos}
        onItemClick={changeTodo}
        onItemRemove={removeTodo}
      />
      <div className="mt-auto">
        <h2 className="font-bold mb-10">
          Completed tasks - {completedTodos.length}
        </h2>
        <TodoList
          items={completedTodos}
          onItemClick={changeCompletedTodo}
          onItemRemove={removeTodo}
        />
      </div>
    </div>
  );
};
