import PropTypes from 'prop-types';

export const Characters = ({ image, name, species, status, location }) => {
	return (
		<div
			className='card mx-auto border rounded'
			style={{ maxWidth: '400px', backgroundColor: '#F8F9FA' }}
		>
			<img className='card-img-top' src={image} alt={name} />
			<div className='card-body text-center'>
				<h3 className='card-title mb-1'>Name: {name}</h3>
				<h4 className='card-text'>Species: {species}</h4>
				<h5 className='card-text'>Status: {status}</h5>
				<h6 className='card-text'>Location: {location?.name}</h6>
			</div>
			<footer className='card-footer text-muted text-end small footer'>By: Dnmlss</footer>
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
};
