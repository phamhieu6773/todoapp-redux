const initState = [
  { id: 1, name: "Learn English", completed: false, priority: "Medium" },
  { id: 2, name: "Learn Vietnamese", completed: true, priority: "High" },
  { id: 3, name: "Learn English", completed: false, priority: "Medium" },
  { id: 4, name: "Learn Vietnamese", completed: true, priority: "High" },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODOLIST":
      return [...state, action.payload];

    case "TOGGLE_STATUS":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE_TODOLIST":
      const newTodo = [...state];
      for (let i = 0; i < newTodo.length; i++) {
        if (newTodo[i].id === action.payload) {
          var a = newTodo.indexOf(newTodo[i]);
        }
      }
      newTodo.splice(a, 1);
      return [...newTodo];

    case "EDIT_TODOLIST":
      return state.map((todo) => {
        console.log(action.payload.priority);
        if (todo.id === action.payload.id) {
          todo.name = action.payload.item;
          todo.priority = action.payload.priority
        }
        return todo
      });
    
    default:
      return state;
  }
};

export default todoListReducer;
