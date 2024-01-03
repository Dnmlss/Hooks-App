import { TodoApp } from '.';

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
	return (
		<li className='list-group-item d-flex justify-content-between'>
			<span
				className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
				onClick={() => onToggleTodo(todo.id)}
			>
				{todo.description}
			</span>

			{/* <button className='btn btn-success' onClick={() => handleDone(todo.id)}>
				Listo
			</button> */}

			<button className='btn btn-danger' onClick={() => onDeleteTodo(todo.id)}>
				Borrar
			</button>
		</li>
	);
};
