import "./App.css";
import { useState, useRef } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const handleAddTodo = () => {
    const text = inputRef.current.value;
    const newItem = { text, completed: false };
    text && setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };
  // console.log(todos);
  const handleClickOnItem = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="to-do-container">
        <ul>
          {todos.map(({ completed, text }, index) => {
           return <div className="item">
              <li
                className={completed ? "done" : ""}
                key={index}
                onClick={() => handleClickOnItem(index)}
              >
                {text}
              </li>
              <span onClick={() => handleDeleteItem(index)}>X</span>
            </div>
          })}
        </ul>
        <input ref={inputRef} placeholder="Enter item..." />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
