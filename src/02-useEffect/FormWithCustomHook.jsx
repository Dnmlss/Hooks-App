import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
	const { formState, onInputChange, username, email, password } = useForm({
		username: '',
		email: '',
		password: '',
	});

	// evitamos usar esta linea gracias a la desestructuración del formState en el archivo useForm.js
	// const { username, email, password } = formState;

	return (
		<>
			<h1>Formulario con custon Hook</h1>
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

			<input
				type='password'
				className='form-control mt-2'
				placeholder='Contraseña'
				name='password'
				value={password}
				onChange={onInputChange}
			/>
		</>
	);
};

// Al colocar en el useEffect como dependencia un array vacío, significa que el useEffect se dispara una unica vez cuando el componente es montado (renderizado)
