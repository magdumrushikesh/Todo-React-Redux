

import { useDispatch } from 'react-redux'
import {   markCompleted, markIncomplete, removeTodo,  updateTodoText } from '../redux/actions'
import { useState } from 'react';
import ok from'../assets/ok.mp3'
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckboxOutline } from "react-icons/io5";
import { RiCloseLine } from 'react-icons/ri';
import './TodoItem.css'


function TodoItem({todo,index}) {
    const dispatch= useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    // Handle Completed Notification
    function play(){
        new Audio(ok).play()
    }

    const handleSave = () => {
        dispatch(updateTodoText(index, editedText));
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setEditedText(e.target.value);
    };
 
    

  return (
    // To Display Todos
    <li className="flex  sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">

        {/* Complete Incompleted Button */}
        <div className="flex items-center">
        {
         !todo.completed && (
        <button
            onClick={() => { dispatch(markCompleted(index)); play(); }}
            className='btn mr-2 btn-check text-sm text-black sm:text-2xl px-3 py-2 rounded hover:bg-gray-200'
        >
            <MdCheckBoxOutlineBlank/>
        </button>
          )
        }
        {
         todo.completed && (
        <button
            onClick={()=> dispatch(markIncomplete(index))}
            className='mr-2 btn-check text-sm text-black sm:text-2xl px-3 py-2 rounded hover:bg-gray-200'
        >
            <IoCheckboxOutline/>
        </button>
             )
        }

            {/* Logic foe Edit Todo */}
            <span className="mr-4 text-gray-500">{index + 1}</span>
            {(isEditing  && !todo.completed)? (
                    <input
                        type="text"
                        value={editedText}
                        onChange={handleChange}
                        onBlur={handleSave}
                        autoFocus
                    />
                ) : (
                    <span
                        className={`mr-4 ${todo.completed ? "line-through text-red-500" : ""}`}
                        onClick={handleEdit}
                    >
                        {todo.text}
                    </span>
                )}
           
        </div>
        <div className="space-x-3 ml-10">
       
            </div>
            {/* Delete Button */}
            <div className="space-x-3 ml-10">
                <button         
                    onClick={() => dispatch(removeTodo(index))}
                    id='btn-del'
                    className='mr-2 btn-check text-sm text-black-500 sm: py-1 px-1 rounded hover:text-red-500'
                >
                    <RiCloseLine/>
                </button>

        </div>
    </li>
  )
}

export default TodoItem
 