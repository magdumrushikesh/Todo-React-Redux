import React, { useState } from 'react'
import { BsPlus } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addTodo, updateSerchTerm } from '../redux/actions';
import FilterButton from './FilterButton';
import TodoList from './TodoList';

function Todo() {
    const dispatch = useDispatch();
    const [newTodoText, setNewTodoText]=useState("");
    const [searchTerm, setSearcTerm]=useState("");
    
    const handleAddTodo =(text)=>{
        dispatch(addTodo(text));
    }

    const handleAddTodoClick=() =>{
        if(newTodoText.trim !== "")
            {
                handleAddTodo(newTodoText.trim());
                setNewTodoText("")    
            }
    }

    const handleSearchChange=(value)=>{
        setSearcTerm(value);
        dispatch(updateSerchTerm(value));

    }
    console.log(newTodoText)
  return (
    // Body
    <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
      {/* Title */}
      <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>PERSONAL TODO APP</h2>
           
      {/* Serach Tab */}
    <form class="max-w-4xl mx-auto max-h-sm">   
        <label for="default-sarch" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" value={searchTerm} 
                    onChange={ (e)=> handleSearchChange(e.target.value)} 
                    name='addTodoInput' id='addTodoInput' class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Todos..." required />
            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
    </form>
    
        
      {/* Input text and btn */}
      <div className='flex items-center mb-4'>
        
      </div>
      {/* Input Add Todo */}
      <div className="search-box mb-2">
        <button  className='btn-search ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none' > <BsPlus/></button>
        <button 
         onClick={handleAddTodoClick}
        className='btn-search ml-4 p-2 bg-blue-500 text-white rounded text-center focus:outline-none'> <BsPlus/></button>
        <input type="text" class="input-search"value={newTodoText} 
        onChange={ (e)=>setNewTodoText(e.target.value)} 
        name='addTodoInput' id='addTodoInput' placeholder='Add Todo' />
      </div>

      {/* Filter and Search */}
      <div className='flex items-center justify-between'>
        <FilterButton/>  
      </div>
      <TodoList/>
    </div>
  )
}

export default Todo
