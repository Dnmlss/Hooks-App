import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Characters = ({
	image,
	name,
	species,
	status,
	location,
	origin,
	episode,
	hasError,
}) => {
	if (hasError) {
		return (
			<p className='alert alert-warning text-center' role='alert'>
				{hasError}
			</p>
		);
	}

	const pRef = useRef();
	const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

	useLayoutEffect(() => {
		const { width, height } = pRef.current.getBoundingClientRect();
		setBoxSize({ width, height });
	}, []);

	return (
		<div
			className='card mx-auto rounded-3 border-3 border-warning-subtle'
			style={{ maxWidth: '500px', backgroundColor: '#F8F9FA' }}
			ref={pRef}
		>
			<img className='card-img-top' src={image} alt={name} />
			<div className='card-body text-center bg-primary-subtle text-emphasis-primary'>
				<h3 className='card-title mb-1'>Name: {name}</h3>
				<h4 className='card-text'>Species: {species}</h4>
				<h5 className='card-text'>Status: {status}</h5>
				<h5 className='card-text'>Location: {location?.name}</h5>
				<h6 className='card-text'>Origin: {origin?.name}</h6>
			</div>
			<footer className='card-footer text-muted text-end small footer'>
				Episodes: {episode?.length}
			</footer>

			<code>{JSON.stringify(boxSize)}</code>
		</div>
	);
};

Characters.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	species: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	location: PropTypes.shape({
		name: PropTypes.string.isRequired,
	}),
	origin: PropTypes.shape({
		name: PropTypes.string.isRequired,
	}),
};
