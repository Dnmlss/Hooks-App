const initialState = [
	{
		id: 1,
		todo: 'Recolectar la piedra del Alma',
		done: false,
	},
];

const todoReducer = (state = initialState, action) => {
	return state;
};

let todos = todoReducer();
console.log(todos);
