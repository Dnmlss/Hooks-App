import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
	const { data, isLoading, hasError } = useFetch('https://rickandmortyapi.com/api/character/424');

	const { id, name, status, species, image } = !!data && data;
	//console.log(id, name);

	return (
		<>
			<h1>Rick & Morty App</h1>
			<hr />

			{/* condicional ternaria */}
			{isLoading ? (
				<div className='alert alert-info text-center'>Loading...</div>
			) : (
				<div
					className='card mx-auto border rounded'
					style={{ maxWidth: '400px', backgroundColor: '#F8F9FA' }}
				>
					<img className='card-img-top' src={image} alt={name} />
					<div className='card-body text-center'>
						<h3 className='card-title mb-1'>Name: {name}</h3>
						<h4 className='card-text'>Species: {species}</h4>
						<h5 className='card-text'>Status: {status}</h5>
					</div>
					<footer className='card-footer text-muted text-end small footer'>
						By: Dnmlss
					</footer>
				</div>
			)}
		</>
	);
};

// Obs: se recomienda utilizar la condicional ternaria solo en casos de tener pocas líneas de código
