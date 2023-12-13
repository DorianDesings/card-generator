export const handleChange = (event, state, setState) => {
	const inputName = event.target.name;
	const inputValue = event.target.value;
	setState({ ...state, [inputName]: inputValue });
};

export const handleChangeMana = (event, state, setState) => {
	const inputName = event.target.name;
	const inputValue = event.target.value === 'X' ? 'X' : event.target.value;

	// Crear una copia del estado actual
	const newState = { ...state };

	// Verificar si el valor es 0 y no es incoloro
	if (inputValue === '0' && inputName !== 'colorless') {
		delete newState.mana[inputName];
	} else {
		// Si el valor no es 0, actualizar la propiedad
		newState.mana[inputName] = inputValue;
	}

	setState(newState);
};
