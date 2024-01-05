import { UserContext } from './userContext';

const user = {
	id: 123,
	name: 'Dnmlss',
	email: 'Dnmlss@google.com',
};

export const UserProvider = ({ children }) => {
	return <UserContext.Provider value={{ hola: 'Mundo', user }}>{children}</UserContext.Provider>;
};
