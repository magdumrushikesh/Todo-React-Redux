import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterTodo } from '../redux/actions';

const FilterButton = () => {
    const dispatch =useDispatch();
    const currentFilter =useSelector((state) => state.filter);
    const handleFilter=(filter)=>{
        dispatch(filterTodo(filter))
    }
  return (
    // Filter button All Complete Incomplete
    <div className='flex space-x-4 items-center'>
        <select
          value={currentFilter}
          onChange={(e)=>handleFilter(e.target.value)}
          className='text-sm px-2 py-1 rounded border mb-2 border-gray-300 focus:outline-none focus:border-blue-500'>
              <option value="ALL">All Todo</option>
              <option value="COMPLETED">COMPLETED</option>
              <option value="INCOMPLETE">INCOMPLETE</option>
        </select>
    </div>
  )
}

export default FilterButton

