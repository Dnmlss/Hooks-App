import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iteratorNumber = 100) => {
	for (let i = 0; i < iteratorNumber; i++) {
		console.log('Ahi vamos...');
	}
	return `${iteratorNumber} iteracciones realizadas`;
};
//
export const MemoHook = () => {
	const { counter, increment } = useCounter(1000);
	const [show, setShow] = useState(true);

	// el useMemo va a memorizar lo que le digamos que retorne. y el valor memorizado se mantendrá a menos que las dependecias del useMemo cambien
	const memorizevalue = useMemo(() => heavyStuff(counter), [counter]);

	return (
		<>
			<h1>
				Counter: <small>{counter}</small>
			</h1>
			<hr />

			<h4>{memorizevalue}</h4>

			<button className='btn btn-primary' onClick={() => increment()}>
				+1
			</button>

			<button className='btn btn-outline-primary' onClick={() => setShow(!show)}>
				Show/Hide {JSON.stringify(show)}
			</button>
		</>
	);
};

// el use memo es muy recomendado cuando se tienen tareas pesadas
