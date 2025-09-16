import { Check } from "./Check";
import cn from "classnames";
import { IoTrashBin } from "react-icons/io5";

export const TodoItem = ({ todo, onClick, removeTodo }) => {
  return (
    <div
      className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full"
      style={{
        viewTransitionName: `todo-${todo.id}`,
      }}
    >
      <button
        className="flex items-center cursor-pointer"
        onClick={() => onClick(todo.id)}
      >
        <Check isCompleted={todo.isCompleted} />
        <span
          className={cn({
            "line-through": todo.isCompleted,
          })}
        >
          {todo.title}
        </span>
      </button>
      <button onClick={() => removeTodo(todo.id)}>
        <IoTrashBin
          size={22}
          className="text-gray-500 hover:text-pink-400 transition-colors ease-in-out duration-300 cursor-pointer"
        />
      </button>
    </div>
  );
};
