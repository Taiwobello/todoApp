import React, { useContext, useState } from 'react';
import { TodosContext } from '../../context/todosContext';

import "./TodoController.css"

const TodoController = () => {
    const {toggleController, todos, clearCompletedTodos, darkMode} = useContext(TodosContext);
    const [activeTag, setActiveTag] = useState("all")
    const handleClick = (id) => {
        setActiveTag(id)
    }
    return ( 
        <div className={`todoController ${darkMode ? "dark" : "light"}`}>
            <p>{todos.filter(todoObj => !todoObj.done).length} items left</p>
            <div className="controller">
                <p id="all" className={`${activeTag === "all" ? "active" : null}`}  onClick={(e) => {
                    toggleController("all")
                    handleClick(e.target.id)
                    }}>All</p>
                <p id="active" className={`${activeTag === "active" ? "active" : null}`} onClick={(e) => {
                    toggleController("active")
                    handleClick(e.target.id)
                    }}>Active</p>
                <p id="completed" className={`${activeTag === "completed" ? "active" : null}`} onClick={(e) => {
                    toggleController("completed")
                    handleClick(e.target.id)
                    }}>Completed</p>
            </div>
            <p className="clearCompleted" onClick={() => clearCompletedTodos()}>Clear Completed</p>
        </div>
     );
}
 
export default TodoController;