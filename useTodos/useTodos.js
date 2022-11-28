import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";



export const useTodos = () => {

  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
  }

  const [todos, dispatch] = useReducer(todoReducer, [] , init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])


  const onNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatch(action);
  }

  const onDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    });
  }

const onToggleTodo = (id) => {
  dispatch({
    type: '[TODO] Toggle Todo',
    payload: id
  });
}

const todosCount = () =>{
  return todos.length;
}

const pendingTodosCount = () =>{
  return todos.filter(todo => !todo.done).length;
}

  return {
    todos,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
    todosCount,
    pendingTodosCount,
  }
}
