import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useContext } from 'react/cjs/react.development';
import { TodosContext } from '../../context/todosContext';
import CustomCheckBox from '../CustomCheckBox/CustomCheckBox';

import "./TodoForm.css"

const TodoInput = () => {
    const {addTodo, darkMode} = useContext(TodosContext)

    const [todo, setTodo] = useState("");
    const [checkedTodo, setCheckedTodo] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(todo, uuidv4(), checkedTodo)
        setTodo("")
    }
    return ( 
        <form className={`todoForm ${darkMode ? "dark" : "light"}`} onSubmit={handleSubmit}>
            <CustomCheckBox value={checkedTodo} setCheckedTodo={setCheckedTodo} forValue="check" />
            <input type="text" value={todo} 
                onChange={(e) => setTodo(e.target.value)} />
        </form>
     );
}
 
export default TodoInput;