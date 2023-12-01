import { useEffect, useState } from 'react';

// pedimos el url
export const useFetch = (url) => {
	//Creamos la lógica como un hook
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		hasError: null,
	});

	const getFetch = async () => {
		//
		setState({
			...state,
			isLoading: true,
		});

		const resp = await fetch(url);
		const data = await resp.json();
		console.log(data);

		// Al tener los datos, enviamos todas las propiedades al setState
		setState({
			data,
			isLoading: false,
			hasError: null,
		});
	};

	// disparamos useEffect
	useEffect(() => {
		getFetch();
	}, [url]);

	return {
		data: state.data,
		isLoading: state.isLoading,
		hasError: state.hasError,
	};
};
