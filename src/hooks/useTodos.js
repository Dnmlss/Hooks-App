import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer';

// función de inicialización
const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

const todosCount = (todos) => {
	return todos.length;
};

const pendingTodosCount = (todos) => {
	return todos.filter((todo) => !todo.done).length;
};

// aprobechamos el useEffect para guardar los todos en el localStorage
export const useTodos = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	//
	const handleNewTodo = (todo) => {
		const action = {
			type: '[TODO] Add Todo',
			payload: todo,
		};

		dispatch(action);
	};

	const handleDeleteTodo = (todoId) => {
		const action = {
			type: '[TODO] Remove todo',
			payload: todoId,
		};

		dispatch(action);
	};

	const handleToggleTodo = (todoId) => {
		const action = {
			type: '[TODO] Toggle Todo',
			payload: todoId,
		};

		dispatch(action);
	};

	return {
		pendingTodosCount: pendingTodosCount(todos),
		handleDeleteTodo,
		handleToggleTodo,
		handleNewTodo,
		todosCount: todosCount(todos),
		todos,
		init,
	};
};
