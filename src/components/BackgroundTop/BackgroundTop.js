import React, {useContext} from 'react';
import { TodosContext } from '../../context/todosContext';

import "./BackgroundTop.css"


const BackgroundTop = () => {

    const {darkMode} = useContext(TodosContext);
    return ( 
        <div className={`backgroundTop ${darkMode ? "dark" : "light"}`}></div>
     );
}
 
export default BackgroundTop;