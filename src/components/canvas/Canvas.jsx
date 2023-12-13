import { useEffect, useRef } from 'react';
import { BG_CARDS, FRAME_CARDS, TITLE_BG_CARDS } from '../../constants/bgCards';
import {
	CARD_HEIGHT,
	CARD_WIDTH,
	INITIAL_MANA_X,
	INTIAL_MANA_Y,
	MANA_HEIGHT,
	MANA_WIDTH,
	SPACE_BETWEEN_MANA
} from '../../constants/card-values';
import { MANA_SYMBOLS, MANA_TYPES } from '../../constants/manaTypes';

const Canvas = ({ cardInfo }) => {
	const canvasRef = useRef(null);
	console.log(cardInfo);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		drawCardName(context, cardInfo);
		loadImages(context, cardInfo);
	}, [cardInfo]);

	return <canvas ref={canvasRef} width={CARD_WIDTH} height={CARD_HEIGHT} />;
};

export default Canvas;

const drawCardName = (context, cardInfo) => {
	const text = cardInfo.cardName || 'Test title';
	const fontSize = 20;
	const fontFamily = 'belene';
	const textColor = '#000';

	context.font = `bold ${fontSize}px ${fontFamily}`;
	context.fillStyle = textColor;
	context.textAlign = 'left';

	const textX = 35;
	const textY = 57;

	context.fillText(text, textX, textY);
};

const drawCardMana = async (context, cardInfo) => {
	const { mana: manaInfo } = cardInfo;
	drawCardName(context, cardInfo);
	const desiredOrder = ['C', 'W', 'U', 'B', 'R', 'G'].reverse();

	// Función para cargar una imagen de maná
	const loadImage = color => {
		return new Promise(resolve => {
			const manaImage = new Image();
			if (color === 'C') {
				manaImage.src = MANA_SYMBOLS.colorless[manaInfo.colorless];
			} else {
				manaImage.src = MANA_SYMBOLS[color]; // Ruta de la imagen de maná correspondiente
			}

			manaImage.onload = () => {
				resolve(manaImage);
			};
		});
	};

	let x = INITIAL_MANA_X;

	for (const color of desiredOrder) {
		const manaColor = MANA_TYPES.find(mana => mana.symbol === color);
		const count = manaInfo[manaColor.name] || 0;

		if (manaColor.name === 'colorless') {
			const image = await loadImage(color);
			context.drawImage(image, x, INTIAL_MANA_Y, MANA_WIDTH, MANA_HEIGHT);
		} else {
			// Cargar y mostrar la cantidad correspondiente de imágenes de maná
			for (let i = 0; i < count; i++) {
				const image = await loadImage(color);

				// Dibuja el símbolo de maná en la posición actual
				context.drawImage(image, x, INTIAL_MANA_Y, MANA_WIDTH, MANA_HEIGHT);

				// Actualiza la posición horizontal para el siguiente símbolo de maná
				x -= MANA_WIDTH + SPACE_BETWEEN_MANA;
			}
		}
	}
};

const drawTitleBackground = (context, cardInfo) => {
	const { cardColor } = cardInfo;
	const titleBgCard = new Image();
	const titleBgCardX = (CARD_WIDTH - 285) / 2; // Centrado horizontalmente
	const titleBgCardY = (CARD_HEIGHT - 390) / 2; // Centrado verticalmente
	titleBgCard.src = TITLE_BG_CARDS[cardColor];
	titleBgCard.onload = () => {
		const titleBgCardAspectRatio = titleBgCard.width / titleBgCard.height;
		const titleBgCardWidth = 285;
		const titleBgCardHeight = 295 / titleBgCardAspectRatio;
		context.drawImage(
			titleBgCard,
			titleBgCardX,
			titleBgCardY,
			titleBgCardWidth,
			titleBgCardHeight
		);

		drawCardMana(context, cardInfo);
	};
};

const drawFrame = (context, cardInfo) => {
	const { cardColor } = cardInfo;
	const frameCard = new Image();
	const frameCardX = (CARD_WIDTH - 295) / 2; // Centrado horizontalmente
	const frameCardY = (CARD_HEIGHT - 400) / 2; // Centrado verticalmente

	frameCard.src = FRAME_CARDS[cardColor];
	frameCard.onload = () => {
		const frameCardAspectRatio = frameCard.width / frameCard.height;
		const frameCardWidth = 295;
		const frameCardHeight = 295 / frameCardAspectRatio;
		context.drawImage(
			frameCard,
			frameCardX,
			frameCardY,
			frameCardWidth,
			frameCardHeight
		);
		drawTitleBackground(context, cardInfo);
	};
};

const drawBackground = (context, cardInfo) => {
	const { cardColor } = cardInfo;
	const bgCard = new Image();
	const bgCardX = (CARD_WIDTH - 300) / 2; // Centrado horizontalmente
	const bgCardY = (CARD_HEIGHT - 430) / 2; // Centrado verticalmente
	bgCard.src = BG_CARDS[cardColor];
	bgCard.onload = () => {
		// Calcular el nuevo tamaño manteniendo la proporción original
		const bgCardAspectRatio = bgCard.width / bgCard.height;
		const bgCardWidth = 300;
		const bgCardHeight = 300 / bgCardAspectRatio;
		context.drawImage(bgCard, bgCardX, bgCardY, bgCardWidth, bgCardHeight);
		drawFrame(context, cardInfo);
	};
};

const drawCardBackground = (context, cardInfo) => {
	const borderRadius = 20; // Valor del radio de las esquinas
	context.fillStyle = '#17140F';
	context.beginPath();
	context.moveTo(borderRadius, 0);
	context.lineTo(CARD_WIDTH - borderRadius, 0);
	context.arcTo(CARD_WIDTH, 0, CARD_WIDTH, borderRadius, borderRadius);
	context.lineTo(CARD_WIDTH, CARD_HEIGHT - borderRadius);
	context.arcTo(
		CARD_WIDTH,
		CARD_HEIGHT,
		CARD_WIDTH - borderRadius,
		CARD_HEIGHT,
		borderRadius
	);
	context.lineTo(borderRadius, CARD_HEIGHT);
	context.arcTo(0, CARD_HEIGHT, 0, CARD_HEIGHT - borderRadius, borderRadius);
	context.lineTo(0, borderRadius);
	context.arcTo(0, 0, borderRadius, 0, borderRadius);
	context.closePath();
	context.fill();

	drawBackground(context, cardInfo);
};

const loadImages = (context, cardInfo) => {
	// context.clearRect(0, 0, CARD_WIDTH, CARD_HEIGHT);
	drawCardBackground(context, cardInfo);
};
