import React, { useContext } from "react";

// import backgroundLight from "./images/bg-desktop-light.jpg";
// import backgroundDark from "./images/bg-desktop-dark.jpg";

import './App.css';
import BackgroundTop from "./components/BackgroundTop/BackgroundTop";
import Header from "./components/Header/Header";
import TodoController from "./components/TodoController/TodoController";
import TodoInput from "./components/TodoForm/TodoForm";
import Todos from "./components/Todos/Todos";
import { TodosContext } from "./context/todosContext";


function App() {
  const {darkMode} = useContext(TodosContext);
  return (
    <div className={`App ${darkMode ? "dark" : "light"}`} >
          <BackgroundTop />
          <div className="container">
            <Header />
            <TodoInput />
            <Todos />
            <TodoController />
          </div>
          
    </div>
  );
}

export default App;
