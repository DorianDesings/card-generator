import { useState } from 'react';
import Canvas from './components/canvas/Canvas';
import CardSelector from './components/card-selector/CardSelector';
import ManaSelectors from './components/mana-selctors/ManaSelectors';

const App = () => {
	const [cardInfo, setCardInfo] = useState({
		cardColor: 'white',
		cardName: '',
		mana: {}
	});
	return (
		<>
			<h1>Núcleo de la aplicación</h1>
			<CardSelector cardInfo={cardInfo} setCardInfo={setCardInfo} />
			<ManaSelectors cardInfo={cardInfo} setCardInfo={setCardInfo} />
			<Canvas width='333' height='466' cardInfo={cardInfo} />
		</>
	);
};

export default App;
