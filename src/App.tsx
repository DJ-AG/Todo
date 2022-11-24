import React, { useState } from "react";
import NewTodo from "./component/NewTodo";
import TodoList from "./component/TodoList";
import { Todo } from "./models/todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId:string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      {/* A component that adds todo's */}
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodos={todoDeleteHandler}/>
    </div>
  );
};

export default App;
