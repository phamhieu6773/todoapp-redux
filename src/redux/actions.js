// export const addTodoAction = {
//     type: 'ADD_TODOLIST',
//     payload: { id: 5, name: "Learn NodeJS", completed: false, priority: "Low" },
// }

export const addTodo = (data) => {
    return {
        type: 'ADD_TODOLIST',
        payload: data
    }
}

export const toggleTodoStatus = (todoId) => {
    return {
        type: 'TOGGLE_STATUS',
        payload: todoId,
    }
}

export const deleteTodo = (todoId) => {
    return {
        type: 'DELETE_TODOLIST',
        payload: todoId,
    }
}

export const editTodo = (data) => {
    return {
        type: 'EDIT_TODOLIST',
        payload: data
    }
}

export const searchFilterChange = (text) => {
    return {
        type: 'SEARCH_FILTERS',
        payload: text,
    }
}

export const statusFilterChange = (status) => {
    return {
        type: 'STATUS_FILTERS',
        payload: status,
    }
}

export const priorityFilterChange = (priority) => {
    return {
        type: 'PRIORITY_FILTERS',
        payload: priority,
    }
}
