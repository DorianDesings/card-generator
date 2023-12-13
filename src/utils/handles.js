export const handleChange = (event, state, setState) => {
	console.log(event.target.value);
	const inputName = event.target.name;
	const inputValue = event.target.value;
	setState({ ...state, [inputName]: inputValue });
};

export const handleChangeMana = (event, state, setState) => {
	console.log(event.target.value);
	const inputName = event.target.name;
	const inputValue = event.target.value;
	setState({
		...state,
		mana: {
			...state.mana,
			[inputName]: inputValue
		}
	});
};
