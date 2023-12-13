import { handleChange } from '../../utils/handles';

const CardSelector = ({ cardInfo, setCardInfo }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='cardName'>Card Name</label>
				<input
					type='text'
					name='cardName'
					id='cardName'
					onChange={event => handleChange(event, cardInfo, setCardInfo)}
				/>
			</div>
			<div>
				<label htmlFor='cardColor'>Card Color</label>
				<select
					name='cardColor'
					id='cardColor'
					onChange={event => handleChange(event, cardInfo, setCardInfo)}
				>
					<option value='white'>White</option>
					<option value='blue'>Blue</option>
					<option value='red'>Red</option>
					<option value='black'>Black</option>
					<option value='green'>Green</option>
					<option value='gold'>Gold</option>
					<option value='artifact'>Artifact</option>
					<option value='land'>Land</option>
				</select>
			</div>
		</form>
	);
};

const handleSubmit = event => {
	event.preventDefault();
};

export default CardSelector;
