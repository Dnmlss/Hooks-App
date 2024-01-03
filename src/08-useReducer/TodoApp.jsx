import { useEffect, useReducer } from 'react';
import { todoReducer, TodoAdd, TodoList, TodoItem } from './index';

const initialState = [];

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, initialState, init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

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

	const onToggleTodo = (todoId) => {
		const action = {
			type: '[TODO] Toggle Todo',
			payload: todoId,
		};

		dispatch(action);
	};

	return (
		<>
			<h1>
				TodoApp: {todos.length},{' '}
				<small>pendientes: {todos.filter((todo) => !todo.done).length}</small>
			</h1>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<TodoList
						todos={todos}
						onDeleteTodo={handleDeleteTodo}
						onToggleTodo={onToggleTodo}
					/>
				</div>

				<div className='col-5'>
					<h4>Agregar TODO</h4>
					<hr />

					{/* todoAdd onNewTodo( todo ) */}
					<TodoAdd onNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	);
};
