import { useState } from 'react';
import { UserContext } from './userContext';

// const user = {
// 	id: 123,
// 	name: 'Dnmlss',
// 	email: 'Dnmlss@google.com',
// };

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState();

	return (
		<>
			<h1>Dnmlss Rules~</h1>
			{/* <UserContext.Provider value={{ hola: 'Mundo', user }}> */}
			<UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
		</>
	);
};
