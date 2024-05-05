import axios from 'axios';
import {
    ADD_TODO,
    ADD_TODOS,
    CLEAR_TODOS,
    FILTER_TODOS,
    MARK_ALL_COMPLETED,
    MARK_COMPLETED,
    MARK_INCOMPLETE,
    REMOVE_TODO,
    TOGGLE_TODO,
    UPDATE_SEARCH_TERM,
    UPDATE_TODO_TEXT
} from "./actionsTypes";

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    filter: "ALL",
    searchTerm: ""
};

const todoReducer = (state = initialState, action) => {
    let updatedTodos;
    switch (action.type) {
        case ADD_TODO:
            updatedTodos = [...state.todos, { text: action.payload.text, completed: false }];
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return {
                ...state,
                todos: updatedTodos
            };
        case TOGGLE_TODO:
            updatedTodos = state.todos.map((todo, index) =>
                index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
            );
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return {
                ...state,
                todos: updatedTodos
            };
        case REMOVE_TODO:
            updatedTodos = state.todos.filter((todo, index) => index !== action.payload.id);
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return {
                ...state,
                todos: updatedTodos
            };
        case MARK_COMPLETED:
            updatedTodos = state.todos.map((todo, index) =>
                index === action.payload.id ? { ...todo, completed: true } : todo
            );
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return {
                ...state,
                todos: updatedTodos
            };
        case MARK_INCOMPLETE:
            updatedTodos = state.todos.map((todo, index) =>
                index === action.payload.id ? { ...todo, completed: false } : todo
            );
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return {
                ...state,
                todos: updatedTodos
            };
        case FILTER_TODOS:
            return {
                ...state,
                filter: action.payload.filter
            };
        case UPDATE_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload.searchTerm
            };
        case MARK_ALL_COMPLETED:
            updatedTodos = state.todos.map(todo => ({ ...todo, completed: true }));
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return {
                ...state,
                todos: updatedTodos
            };
            case ADD_TODOS:
        return {
        ...state,
        todos: action.payload
    };
    case CLEAR_TODOS:
    localStorage.removeItem('todos');
    return {
        ...state,
        todos: []
    };
    case UPDATE_TODO_TEXT:
    updatedTodos = state.todos.map((todo, index) =>
        index === action.payload.id ? { ...todo, text: action.payload.text } : todo
    );
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    return {
        ...state,
        todos: updatedTodos
    };


        default:
            return state;
    }
};
// Action creator to fetch todos
export const fetchTodos = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            const todos = response.data.map(todo => ({
                text: todo.title,
                completed: todo.completed
            }));
            dispatch({ type: 'ADD_TODOS', payload: todos });
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };
};

export default todoReducer;
