import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHooks = () => {
	const { counter, increment, decrement, reset } = useCounter();

	return (
		<>
			<div>Counter With Hook: {counter}</div>
			<hr />
			<button className='btn btn-primary' onClick={() => increment(5)}>
				+1
			</button>
			<button className='btn btn-primary' onClick={reset}>
				Reset
			</button>
			<button className='btn btn-primary' onClick={() => decrement(5)}>
				-1
			</button>
		</>
	);
};
