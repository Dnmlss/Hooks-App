import { useEffect, useState } from 'react';

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: 'Dnmlss',
		email: 'dnmlss@google.com',
	});

	const { username, email } = formState;

	// función que permite realizar el cambio de cualquier input
	const onInputChange = ({ target }) => {
		const { name, value } = target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	useEffect(() => {
		console.log('useEffect called');
	}, []);

	useEffect(() => {
		console.log('formState changed!');
	}, [formState]);

	useEffect(() => {
		console.log('email changed!');
	}, [email]);

	return (
		<>
			<h1>Formulario Simple</h1>
			<hr />
			<input
				type='text'
				className='form-control'
				placeholder='Username'
				name='username'
				value={username}
				onChange={onInputChange}
			/>

			<input
				type='email'
				className='form-control mt-2'
				placeholder='diego@nmlss.com'
				name='email'
				value={email}
				onChange={onInputChange}
			/>
		</>
	);
};

// Al colocar en el useEffect como dependencia un array vacío, significa que el useEffect se dispara una unica vez cuando el componente es montado (renderizado)
