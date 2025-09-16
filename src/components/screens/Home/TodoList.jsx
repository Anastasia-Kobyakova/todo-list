import { TodoItem } from "./item/TodoItem";

export const TodoList = ({ items, onItemClick, onItemRemove }) => {
  return items.map((item) => (
    <TodoItem
      key={item.id}
      todo={item}
      onClick={onItemClick}
      removeTodo={onItemRemove}
    />
  ));
};
