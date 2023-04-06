import { createSelector } from "reselect";

// export const todoListSelector = (state) => {

//     const searchText = searchTextSelector(state)

//     const todoRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(state.filters.search);
//     })

//     return todoRemaining
// };

export const todoListSelector = (state) => state.todoList;
export const filtersStatusSelector = (state) => state.filters.status;
export const filtersPrioritySelector = (state) => state.filters.priority;
export const searchTextSelector = (state) => state.filters.search;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  filtersStatusSelector,
  searchTextSelector,
  filtersPrioritySelector,
  (todoList, status, searchText, priority ) => {
    return todoList.filter((todo) => {
      if(status === "All") {
       
            return priority.length ? todo.name.toLowerCase().includes(searchText.toLowerCase()) && priority.includes(todo.priority): todo.name.toLowerCase().includes(searchText.toLowerCase());
        }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed"
          ? todo.completed 
          : !todo.completed) &&
        (priority.length ? priority.includes(todo.priority): true)
      );
    });
  }
);
