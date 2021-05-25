import React, { useContext } from 'react';
import { TodosContext } from '../../context/todosContext';

import "./CustomCheckBox.css"

const CustomCheckBox = ({value, todo, forValue, id, done}) => {
    // const {setTodos, todos} = useContext(TodosContext);
    const {toggleDone, darkMode} = useContext(TodosContext);
    return ( 
        <div className={`customCheckBox ${darkMode ? "dark" : "light"}`}>
            <input type="checkbox" id={id} value={done}  checked={done}
                onChange={(e) => {
                    toggleDone(id)
                    console.log(e.target.checked, forValue, id)
                }}  />
            <label htmlFor={id}></label>
        </div>
     );
}
 
export default CustomCheckBox;