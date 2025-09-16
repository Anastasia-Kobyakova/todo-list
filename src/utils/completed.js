export const completed = (value, id) => (prev) => {
  const copyTodos = [...prev];
  const currentTodo = copyTodos.find((t) => t.id === id);
  currentTodo.isCompleted = value;

  return copyTodos;
};
