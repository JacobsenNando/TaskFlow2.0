import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Login from "./components/Login";
import Signup from "./components/Signup";
import icon from "./img/icon.png";
import name from "./img/name.png";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      if (response.data.token) {
        // Salvar o token no localStorage (ou outra forma de gerenciamento de estado)
        localStorage.setItem('token', response.data.token);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Erro de login:", error);
    }
  };

  const handleSignup = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { email, password });
      if (response.data.token) {
        // Salvar o token no localStorage (ou outra forma de gerenciamento de estado)
        localStorage.setItem('token', response.data.token);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Erro de cadastro:", error);
    }
  };

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {isAuthenticated ? <Redirect to="/" /> : <Login handleLogin={handleLogin} />}
        </Route>
        <Route path="/signup">
          {isAuthenticated ? <Redirect to="/" /> : <Signup handleSignup={handleSignup} />}
        </Route>
        <Route path="/">
          {isAuthenticated ? (
            <div className="app">
              <div className="header">
                <div>
                  <img src={icon} className="icon" alt="icon" />
                  <img src={name} className="icon" alt="name" />
                </div>
                <div>
                  <p>MENU</p>
                </div>
              </div>
              <TodoForm addTodo={addTodo} />
              <div className="todo-list">
                {todos.map((todo) => (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    completeTodo={completeTodo}
                  />
                ))}
              </div>
            </div>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
