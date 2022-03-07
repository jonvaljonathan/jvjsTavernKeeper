import { ReactionInteraction } from '../../types/interactions/ReactionInteraction';
import { skills } from '../../utils/Skills';
import client from '../../app';

const guild = client.guilds.cache.get('911481186013040673');

export const firstNFTInteraction: ReactionInteraction = {
	prompt: `**Pick you first skill**\n:tavern: Tavern\n:Wizard: Wizard\n${guild.emojis.cache.get(skills.Cleric)}
    Cleric`,
	reactions: [
		{
			reaction: 'tavern',
			functionToCall: '',
			successMessage: 'The tavern keeper hands you mug of frothy ale.',
		},
		{
			reaction: 'wizard',
			functionToCall: '',
			successMessage: 'The tavern keeper hands you mug of frothy ale.',
		},
		{
			reaction: 'cleric',
			functionToCall: '',
			successMessage: 'The tavern keeper hands you mug of frothy ale.',
		},
	],
};