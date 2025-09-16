import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import cn from "classnames";

export const CreateTodoField = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const disabled = !title.trim();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(title);
        setTitle("");
      }}
      className="flex items-center mb-20 rounded-2xl border-zinc-800 border-2 px-5 py-4 w-full"
    >
      <button
        disabled={disabled}
        className={cn(
          "border-2 border-pink-400 bg-pink-400 rounded-lg w-5 h-5 mr-3 flex items-center justify-center",
          disabled ? "opacity-55" : "cursor-pointer"
        )}
      >
        <FaPlus size={16} className="text-zinc-800" />
      </button>
      <input
        className="bg-transparent w-full border-none outline-none"
        placeholder="Add a task"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
    </form>
  );
};
