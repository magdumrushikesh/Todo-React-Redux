
    import { ADD_TODO, CLEAR_TODOS, FILTER_TODOS, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM, UPDATE_TODO_TEXT  } from "./actionsTypes";

    export const addTodo =(text) =>({
        type : ADD_TODO,
        payload: {text}
    });

    export const toggleTodo =(id) =>({
        type : TOGGLE_TODO,
        payload: {id}
    });

    export const removeTodo =(id) =>({
        type : REMOVE_TODO,
        payload: {id}
    });

    export const markCompleted =(id) =>({
        type : MARK_COMPLETED,
        payload: {id}
    });

    export const markIncomplete =(id) =>({
        type : MARK_INCOMPLETE,
        payload: {id}
    });

    export const filterTodo =(filter) =>({
        type : FILTER_TODOS,
        payload: {filter}
    });

    export const markAllCompleted =() =>({
        type : MARK_ALL_COMPLETED,
    });

    export const updateSerchTerm =(searchTerm) =>({
        type : UPDATE_SEARCH_TERM,
        payload: {searchTerm}
    });
    export const clearTodos = () => ({
        type: CLEAR_TODOS
        
    });
    export const updateTodoText = (id, text) => ({
        type: UPDATE_TODO_TEXT,
        payload: { id, text }
    });
    
    

    
