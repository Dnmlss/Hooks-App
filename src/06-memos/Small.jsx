import React from 'react';

export const Small = React.memo(({ value }) => {
	console.log('Me volví a dibujar :(');

	return <small>{value}</small>;
});

// En este caso, utilizamos la función React.memo() para evitar el redibujo innecesario de Small cuando no cambian las props, mejorando así el rendimiento de la aplicación
