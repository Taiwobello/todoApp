import React, { useContext } from 'react';

import iconSun from "../../images/icon-sun.svg";
import iconMoon from "../../images/icon-moon.svg"
import { TodosContext } from '../../context/todosContext';

import "./Header.css";

const Header = () => {
    const {setDarkMode, darkMode} = useContext(TodosContext);

    const toggleDarkMode = () => {setDarkMode(!darkMode)}
    return ( 
        <div className="header" data-theme={darkMode ? "dark" : "light"} >
            <h1>TODO</h1>
            <img src={darkMode ? iconSun : iconMoon} onClick={toggleDarkMode} alt="img" />
        </div>
     );
}
 
export default Header;