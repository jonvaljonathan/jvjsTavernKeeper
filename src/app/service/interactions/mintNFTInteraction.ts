import { ReactionInteraction } from '../../types/interactions/ReactionInteraction';
export const mintNFTInteraction = (firstSkill, secondSkill): ReactionInteraction => {
	{
	
		return {
			prompt: `**You picked**\n:${firstSkill}: ${firstSkill}\n:${secondSkill}: ${secondSkill}\n\n Press 👌 to confirm, 🔄 to restart, or ❌ to cancel.`,
			reactions: [
				{
					reaction: '👌',
					functionToCall: 'mintNFT',
					successMessage: 'The tavern keeper hands you mug of frothy ale.',
				},
				{
					reaction: '🔄',
					functionToCall: '',
					successMessage: 'The tavern keeper hands you mug of frothy ale.',
				},
				{
					reaction: '❌',
					functionToCall: '',
					successMessage: 'The tavern keeper hands you mug of frothy ale.',
				},
			],
		};
	}
};