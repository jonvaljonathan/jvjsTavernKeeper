import { ReactionInteraction } from '../../types/interactions/ReactionInteraction';

export const firstInteraction: ReactionInteraction = {
	prompt: 'After your long, cold journey through the darkness, you are relieved to spot a warm light coming from an old wooden tavern. You push the old creaky door open and immediately you feel the warmth of a fire and the hum of conversation fills your ears. :candle: \n The well built tavern keeper turns to face you. "Welcome adventurer! How can I assist you?" :tavern-1: \n\n ------------------------------------------------ \n\n**Welcome to RaidGuild** \nA Decentralized Collective of Mercenaries Ready to Slay Your Web3 Product Demons.\n\n**Manifesto**\nWe believe that DAOs will power the future of work. Through the MetaCartel network, we assembled a fellowship of the best builders, designers and hustlers in the space in order to make this future a reality. By sharing resources, branding and collaboration tools, we can create positive-sum value for the Ethereum ecosystem in a way that has never been possible before the advent of DAOs. \n\nWe believe in Web3 and are here to build it, use it, and propagate it. The profits from our work will be used to fund development of open source tooling and public goods. We will share the learnings from our experiments and open source our processes for the community to learn and build from. \n\n*If you want to go fast, go alone. If you want to go far, go together.* \n\n------------------------------------------------ \n\nThe tavern keeper offers you a drink. Press :beer: to accept it.',
	reactions: [
		{
			reaction: '🍺',
			functionToCall: 'secondInteraction',
			successMessage: 'The tavern keeper hands you mug of frothy ale.',
		},
	],
};