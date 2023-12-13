import { manaTypes } from '../../constants/manaTypes';
import { handleChangeMana } from '../../utils/handles';
// import { handleChangeMana } from '../../utils/handles';

const ManaSelectors = ({ cardInfo, setCardInfo }) => {
	return manaTypes.map(manaType => (
		<div key={manaType.id}>
			<label htmlFor={manaType.name}>{manaType.name} Mana</label>
			<select
				name={manaType.name}
				id={manaType.name}
				onChange={event => handleChangeMana(event, cardInfo, setCardInfo)}
				// value={cardInfo[`mana${index}`] || ''}
			>
				<option value='0'>0</option>
				{manaType.name === 'generic' && <option value='x'>X</option>}
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
				<option value='5'>5</option>
				<option value='6'>6</option>
				<option value='7'>7</option>
				<option value='8'>8</option>
				<option value='9'>9</option>
			</select>
		</div>
	));
};

export default ManaSelectors;
