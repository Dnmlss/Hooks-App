import { useContext } from 'react';
import { UserContext } from './context/userContext';

export const LoginPage = () => {
	const { user, setUser } = useContext(UserContext);
	//console.log(hola, user);

	return (
		<>
			<h1>LoginPage</h1>
			<hr />

			<pre>{JSON.stringify(user, null, 3)}</pre>

			<button
				className='btn btn-primary rounded-3'
				onClick={() => setUser({ id: 123, name: 'Diego', email: 'diego@google.com' })}
			>
				Establecer usuario
			</button>
		</>
	);
};
