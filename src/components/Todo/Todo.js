import React, {useContext} from 'react';
import { TodosContext } from '../../context/todosContext';
import IconCross from "../../images/icon-cross.svg"
import CustomCheckBox from '../CustomCheckBox/CustomCheckBox';

import "./Todo.css"

const Todo = ({todoObj}) => {

    const {todo, id, done} = todoObj
    const { removeTodo, darkMode } = useContext(TodosContext);

    const handlRemoveTodo = (e) => {
        return removeTodo(e.target.parentElement.classList[1])
        
    }

    return ( 
        <div className={`todo ${id} ${done} ${darkMode ? "dark" : "light"}`}>
            <div className="todoWrap">
                <CustomCheckBox todo={todo} id={id} forValue={todo} done={done} />
                <p className={`todoText ${done ? "done" : null}`}>{todo}</p>
            </div>
            <img className="removeIcon" src={IconCross} onClick={handlRemoveTodo} alt="X" />
        </div>  
     );
}
 
export default Todo;