import { MANA_TYPES } from '../../constants/manaTypes';
import { handleChangeMana } from '../../utils/handles';
// import { handleChangeMana } from '../../utils/handles';

const ManaSelectors = ({ cardInfo, setCardInfo }) => {
	return MANA_TYPES.map(manaType => (
		<div key={manaType.id}>
			<label htmlFor={manaType.name}>{manaType.name} Mana</label>
			<select
				name={manaType.name}
				id={manaType.name}
				onChange={event => handleChangeMana(event, cardInfo, setCardInfo)}
				// value={cardInfo[`mana${index}`] || ''}
			>
				{manaType.name === 'colorless' && (
					<>
						<option value=''>Empty</option>
						<option value='X'>X</option>
					</>
				)}
				<option value='0'>0</option>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
				<option value='5'>5</option>
				<option value='6'>6</option>
				<option value='7'>7</option>
				<option value='8'>8</option>
				<option value='9'>9</option>
				{manaType.name === 'colorless' && (
					<>
						<option value='10'>10</option>
						<option value='11'>11</option>
						<option value='12'>12</option>
						<option value='13'>13</option>
						<option value='14'>14</option>
						<option value='15'>15</option>
						<option value='16'>16</option>
						<option value='17'>17</option>
						<option value='18'>18</option>
						<option value='19'>19</option>
						<option value='20'>20</option>
					</>
				)}
			</select>
		</div>
	));
};

export default ManaSelectors;
