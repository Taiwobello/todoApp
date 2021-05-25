import React, {useContext} from 'react';
import { TodosContext } from '../../context/todosContext';
import Todo from '../Todo/Todo';

import "./Todos.css"


const Todos = () => {
    const {todos, todoController} = useContext(TodosContext)
        let filteredTodos = todos

        filteredTodos = filteredTodos.filter((todoObj) => {
            if (todoController === "active" && !todoObj.done) {
                return todoObj
            }
            else if (todoController === "completed" && todoObj.done) {
                return todoObj
            }
            return todoController === "all"

        })
    return ( 
        <div className="todos">
            {filteredTodos.map((todoObj) => {
                return ( <Todo key={todoObj.id} todoObj={todoObj} />)
            })}
        </div>
     );
}
 
export default Todos;

