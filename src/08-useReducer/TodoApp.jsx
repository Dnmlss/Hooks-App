import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const initialState = [
	{
		id: new Date().getTime(),
		description: 'Recolectar la piedra del alma',
		done: false,
	},

	{
		id: new Date().getTime() * 3,
		description: 'Recolectar la piedra del infinito',
		done: false,
	},
];

const handleNewTodo = (todo) => {
	console.log({ todo });
};

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, initialState);

	return (
		<>
			<h1>
				TodoApp: 10, <small>pendientes: 2</small>
			</h1>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<TodoList todos={todos} />
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
