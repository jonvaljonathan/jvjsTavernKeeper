import { ReactionInteraction } from '../../types/interactions/ReactionInteraction';
export const xDAIInteraction: ReactionInteraction = {
	prompt:'The Tavern Keeper replies: "Yes, I know something of this Raid Token you speak of..." and throws a shiny coin on the bar. \n\n------------------------------------------------\n\n**Our Token $RAID** :raid2:\n📍Launch article, <https://medium.com/raid-guild/why-token-why-now-4c0b8e8ea45> \n\n**📍Token Info**\nxDai Token Address: 0x18e9262e68cc6c6004db93105cc7c001bb103e49\nMainnet Token Address: 0x154e35c2b0024B3e079c5c5e4fC31c979c189cCB\nTotal Circulating Supply: 201,210,864\n\n**📍RAID-WETH Pair**\n<https://info.honeyswap.org/#/pair/0x256f3a3b6897298ce11d34c0695c7cf49c15d1b3>**📍RAID-WETH Swap**\n<https://app.honeyswap.org/#/swap?inputCurrency=0x18e9262e68cc6c6004db93105cc7c001bb103e49&outputCurrency=0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1&chainId=100> \n\n**📍RAID on Coingecko**\n<https://www.coingecko.com/en/coins/raid-token> \n\n**📍How to get WXDAI guide**\n<https://raidguild.notion.site/2-How-to-get-xdai-wxdai-8f1e28337bdf44c4a9ccd39d687443fd> \n\n------------------------------------------------ \n\nTo continue conversation, go repond with to the choose your response message ☝️',
	reactions: [
		{
			reaction: '☝️',
			functionToCall: 'secondInteraction',
			successMessage: '',
		},
	],
};