import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

const TodoList = () =>{
    const filteredTodos = useSelector((state)=>{
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm

        return todos.filter((todo)=>{
            // console.log("todo is ",todo)
            // console.log("todo text is ",todo.text)
            const matchesFilter = (filter === "COMPLETED" && todo.completed) || (filter === "INCOMPLETE" && !todo.completed) || (filter === "ALL")

            const matcheSearch = todo.text.toLowerCase().includes(searchTerm)
    
            return matchesFilter && matcheSearch
        })
    })

    console.log("Filtered todos", filteredTodos);
    
  return (
    <ul>
        <li className='my-2 text-sm italic'>All your todos..</li>
        {
            filteredTodos.map((todo,index)=>(
                <TodoItem key={index} todo={todo} index={index}/>
            ))
        }
    </ul>
  )
}

export default TodoList
