import { ReactionInteraction } from '../../types/interactions/ReactionInteraction';

export const secondNFTInteraction: ReactionInteraction = {
	prompt: '**Pick you first skill**\n:archer: Archer\n:paladin: Paladin\n:monk: Monk',
	reactions: [
		{
			reaction: 'archer',
			functionToCall: '',
			successMessage: 'The hunter keeper hands you mug of frothy ale.',
		},
		{
			reaction: 'paladin',
			functionToCall: '',
			successMessage: 'The hunter keeper hands you mug of frothy ale.',
		},
		{
			reaction: 'monk',
			functionToCall: '',
			successMessage: 'The hunter keeper hands you mug of frothy ale.',
		},
	],
};