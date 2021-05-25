import React, {createContext, useState, useEffect} from 'react';

export const TodosContext = createContext()

const TodosContextProvider = (props) => {
    
    const [darkMode, setDarkMode] = useState(false);
    const [todos, setTodos] = useState(() => {
        const localData = localStorage.getItem("todos");
        return localData ? JSON.parse(localData) : []});
    const [todoController, setTodoController] = useState("all")

    // localData ? setTodos(JSON.parse(localData)) : [];
    

    const addTodo = (todo, id, done) => {
        setTodos([...todos, {todo, id, done}])
    }

    const removeTodo = (id) => {
        setTodos(todos.filter((todoObj) => todoObj.id !== id))
    }

    const toggleDone = (id) => {
        let updatedList = todos.map(todoObj => {
            if(todoObj.id === id){
                return {...todoObj, done: !todoObj.done}
            }
            return todoObj
        })
        setTodos(updatedList)
    }
    
    const toggleController = (value) => {
        setTodoController(value)
    }

    const clearCompletedTodos = () => {
        setTodos(todos.filter(todoObj => !todoObj.done))
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return ( 
        <TodosContext.Provider value={{setDarkMode, darkMode, addTodo, removeTodo, todos, setTodos, toggleDone, toggleController, todoController, clearCompletedTodos}}>
            {props.children}
        </TodosContext.Provider>
     );
}
 
export default TodosContextProvider;