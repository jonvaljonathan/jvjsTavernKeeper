import { ReactionInteraction } from '../../types/interactions/ReactionInteraction';

export const thirdInteraction: ReactionInteraction = {
	prompt: 'The Tavern Keeper continues speaking, but sensing you want to know more he asks: *"Is there... anything else I can help you with?"* \n\nYou reply: "Well, I\'ve been hearing a lot of rumours recently about a place called Raid Guild. Do you know of it?"\n\n The Tavern Keeper looking surprised, glances around checking if anyone had heard you. Relieved that no one was in earshot, he replies in a quiet voice: \n "I may... What might you be wanting to know?" :questions\n\n ------------------------------------------------ \n\nChoose your response: :speaking_head \n\nš¦ "Can you tell me a little more about this Raid Guild?" \nš§ "I\'m a mercenary looking for work, can you help me?" \nšØ "I want to select my role at the Guild and show them the skills I have" \nš© "I\'d like to join the Guild as an apprentice" \nšŖ "I\'ve got a job that needs doing and I need some mercenaries to do it" \nš« "Can you tell me anything about the Raid Token or WXDAI?" \nš¤ There\'s something else I want to know',
	reactions: [
		{
			reaction: 'š¦',
			functionToCall: '',
			successMessage: '',
		},
		{
			reaction: 'š§',
			functionToCall: '',
			successMessage: '',
		},
		{
			reaction: 'šØ',
			functionToCall: 'buildNFT',
			successMessage: '',
		},
		{
			reaction: 'š©',
			functionToCall: '',
			successMessage: '',
		},
		{
			reaction: 'šŖ',
			functionToCall: '',
			successMessage: '',
		},
		{
			reaction: 'š«',
			functionToCall: 'xDAIInteraction',
			successMessage: '',
		},
		{
			reaction: 'š¤',
			functionToCall: '',
			successMessage: '',
		},
	],
};