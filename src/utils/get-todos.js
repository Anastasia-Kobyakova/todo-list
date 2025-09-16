export const getTodosFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("Todos") || "[]");
};
