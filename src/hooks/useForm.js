import { useState } from 'react';

export const useForm = (initialForm = {}) => {
	const [formState, setFormState] = useState(initialForm);

	// función que permite realizar el cambio de cualquier input
	const onInputChange = ({ target }) => {
		const { name, value } = target;

		setFormState({
			// Utilizamos el spread operator para no modificar el objeto original
			...formState,
			[name]: value,
		});
	};

	return {
		// desestructuramos el formState, para poder utilizar todas las propiedades en el Hook
		...formState,
		formState,
		onInputChange,
	};
};
