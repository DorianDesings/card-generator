import { v4 } from 'uuid';

export const MANA_ORDER = ['W', 'U', 'B', 'R', 'G']; // Orden deseado de colores de maná

export const MANA_TYPES = [
	{ id: v4(), name: 'colorless', symbol: 'C' },
	{ id: v4(), name: 'white', symbol: 'W' },
	{ id: v4(), name: 'blue', symbol: 'U' },
	{ id: v4(), name: 'black', symbol: 'B' },
	{ id: v4(), name: 'red', symbol: 'R' },
	{ id: v4(), name: 'green', symbol: 'G' }
];

export const MANA_SYMBOLS = {
	colorless: {
		0: '/symbols/0.png',
		1: '/symbols/1.png',
		2: '/symbols/2.png',
		3: '/symbols/3.png',
		4: '/symbols/4.png',
		5: '/symbols/5.png',
		6: '/symbols/6.png',
		7: '/symbols/7.png',
		8: '/symbols/8.png',
		9: '/symbols/9.png',
		10: '/symbols/10.png',
		11: '/symbols/11.png',
		12: '/symbols/12.png',
		13: '/symbols/13.png',
		14: '/symbols/14.png',
		15: '/symbols/15.png',
		16: '/symbols/16.png',
		17: '/symbols/17.png',
		18: '/symbols/18.png',
		19: '/symbols/19.png',
		20: '/symbols/20.png',
		X: '/symbols/X.png'
	},
	W: '/symbols/W.png',
	U: '/symbols/U.png',
	B: '/symbols/B.png',
	R: '/symbols/R.png',
	G: '/symbols/G.png'
};
