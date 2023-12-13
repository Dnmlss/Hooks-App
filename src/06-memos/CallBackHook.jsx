import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {
	const [counter, setCounter] = useState(0);

	const incrementFather = useCallback(() => {
		setCounter((value) => value + 1);
	}, []);

	useEffect(() => {
		//incrementFather();
	}, [incrementFather]);

	return (
		<>
			<h1>useCallBack Hook: {counter}</h1>
			<hr />

			<ShowIncrement increment={incrementFather} />
		</>
	);
};
