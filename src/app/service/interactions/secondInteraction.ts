import { ReactionInteraction } from '../../types/interactions/ReactionInteraction';

export const secondInteraction: ReactionInteraction = {
	prompt: 'You pick up the glass and take a long drink of cool ale. It\'s been a long day... 🍺 \n\nThe Tavern Keeper, seeing you have enjoyed your drink, starts a conversation with you: "You look new around here, let me tell you a thing or two about how this place works" \n\n ------------------------------------------------ \n\n**How to Discord** \n⭐ To learn & join, checkout BARRACKS. \n⭐ To hangout & hire, checkout TOWNSQUARE. \n⭐ For queries regarding hiring & consultations, ask at 🛬│client-arena \n⭐ For seasons happenings, checkout COHORT. \n⭐ To send any anonymous feedback, suggestions or comments, send a direct message to the @Minister Sentry bot with the message prefix whisper. \n\n**Useful Resources** \n📍 Homepage,< https://raidguild.org/> \n📍 To hire, <https://hireus.raidguild.org/> \n📍 To join, <https://raidguild.org/join> \n\n**Recommended Reading** \n🔷  The handbook,  <https://handbook.raidguild.org/> \n🔷  Our newsletter,< https://medium.com/raid-guild> \n\n**Stay Connected** \n📨  Twitter, <https://twitter.com/RaidGuild> \n\nAny further public updates & announcements will posted in 🔔│announcements \n  \n------------------------------------------------ \n\nThe Tavern Keepers hospitality pleases you. It\'s been a long journey to get here and it\'s nice to have someone to talk to. \n\nWanting to know more, you don\'t say anything and continue to listen👂',
	reactions: [
		{
			reaction: '👂',
			functionToCall: 'thirdInteraction',
			successMessage: 'The tavern keeper hands you mug of frothy ale.',
		},
	],
};