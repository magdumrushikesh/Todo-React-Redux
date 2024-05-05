import { useDispatch, useSelector } from "react-redux"
import TodoItem from "./TodoItem";

import { fetchTodos } from "../redux/reducers";
import { clearTodos, markAllCompleted } from "../redux/actions";


function TodoList() {
       const dispatch= useDispatch();
       const handleClearData = () => {
        dispatch(clearTodos());
    };
    
       const handleImportData = () => {
        
          dispatch(fetchTodos());
      
        // Call the fetchTodos action to import data
        dispatch(fetchTodos());
    };
        
      
    
      
    const filteredTodos=useSelector((state)=>{
        const todos= state.todos;
        const filter= state.filter;
        const searchTerm =state.searchTerm;
        

        return todos.filter((todo) =>{
            const matchsFilter =(filter=== "COMPLETED" && todo.completed) || (filter==="INCOMPLETE" &&
             !todo.completed) || (filter=== "ALL");

            const matchesSearch= todo.text.toLowerCase().includes(searchTerm);

            return matchsFilter && matchesSearch
        })

    })

    console.log('filterred Todos : ',filteredTodos)
  return (
    <div className="">
      {/* Mark All Completed Button */}
      <button
        onClick={()=> dispatch(markAllCompleted())}
        className='text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded'>Mark All Completed</button>
       <button onClick={handleImportData} className='text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded'>
                Import Data
            </button>
            <button onClick={handleClearData} className='text-sm px-2 py-1 bg-red-400 text-white ml-2 rounded'>
                Reset
            </button>
            
      <ul className="my-2 text-sm italic">All Yours Notes Here.. *Click todo to Edit</ul>
      {
       filteredTodos.map((todo, index) => {
        return <TodoItem key={index} todo={todo} index={index}/>
      })
      // 
      }
    </div>
  )
}

export default TodoList


