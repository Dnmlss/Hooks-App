import { useCounter, useFetch } from '../hooks';
import { Characters, LoadingCharacter } from './';

export const MultipleCustomHooks = () => {
	const { increment, reset, decrement, url } = useCounter();
	const { data, isLoading, hasError } = useFetch(url);
	const { id, image, name, species, status, location } = data || {};

	return (
		<>
			<h1>Rick & Morty App</h1>
			<hr />

			{/* condicional ternaria */}
			{isLoading ? (
				<LoadingCharacter />
			) : (
				<Characters
					image={image}
					name={name}
					species={species}
					status={status}
					location={location}
				/>
			)}

			<div
				className='d-flex justify-content-center align-items-center mt-2'
				role='group'
				disabled={isLoading}
			>
				<button
					onClick={() => decrement()}
					className='btn btn-primary'
					disabled={isLoading}
				>
					Back
				</button>

				<button
					onClick={() => reset()}
					className='btn btn-primary'
					style={{ width: 'auto', height: 'auto' }}
				>
					Reset
				</button>

				<button
					onClick={() => increment()}
					className='btn btn-primary'
					style={{ width: 'auto', height: 'auto' }}
				>
					Next
				</button>
			</div>
		</>
	);
};

// Obs: se recomienda utilizar la condicional ternaria solo en casos de tener pocas líneas de código
