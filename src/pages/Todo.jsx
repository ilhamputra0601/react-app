import Navbar from '../Components/Navbar';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';
import { useState } from "react";

const Todo = () => {
  const [getTodos, setTodos] = useState( [
    { id: 1, title: 'Eat' },
    { id: 2, title: 'Sleep' },
    { id: 3, title: 'Code' },
  ]);

  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo));
    console.log(getTodos);
  };
  return (
    <>
      <Navbar />
      <div class="container mt-5 w-25">
        <h3>Todo List</h3>
        <TodoCreate onCreateTodo={eventCreateTodo} />
        <TodoList dataTodos={getTodos} />
      </div>
    </>
  );
};

export default Todo;
