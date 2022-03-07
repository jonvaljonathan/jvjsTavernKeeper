import { ReactionInteraction } from '../../types/interactions/ReactionInteraction';

export const thirdInteraction: ReactionInteraction = {
	prompt: 'The Tavern Keeper continues speaking, but sensing you want to know more he asks: *"Is there... anything else I can help you with?"* \n\nYou reply: "Well, I\'ve been hearing a lot of rumours recently about a place called Raid Guild. Do you know of it?"\n\n The Tavern Keeper looking surprised, glances around checking if anyone had heard you. Relieved that no one was in earshot, he replies in a quiet voice: \n "I may... What might you be wanting to know?" :questions\n\n ------------------------------------------------ \n\nChoose your response: :speaking_head \n\n🇦 "Can you tell me a little more about this Raid Guild?" \n🇧 "I\'m a mercenary looking for work, can you help me?" \n🇨 "I want to select my role at the Guild and show them the skills I have" \n🇩 "I\'d like to join the Guild as an apprentice" \n🇪 "I\'ve got a job that needs doing and I need some mercenaries to do it" \n🇫 "Can you tell me anything about the Raid Token or WXDAI?" \n🤔 There\'s something else I want to know',
	reactions: [
		{
			reaction: '🇦',
			functionToCall: '',
			successMessage: '',
		},
		{
			reaction: '🇧',
			functionToCall: '',
			successMessage: '',
		},
		{
			reaction: '🇨',
			functionToCall: 'buildNFT',
			successMessage: '',
		},
		{
			reaction: '🇩',
			functionToCall: '',
			successMessage: '',
		},
		{
			reaction: '🇪',
			functionToCall: '',
			successMessage: '',
		},
		{
			reaction: '🇫',
			functionToCall: 'xDAIInteraction',
			successMessage: '',
		},
		{
			reaction: '🤔',
			functionToCall: '',
			successMessage: '',
		},
	],
};