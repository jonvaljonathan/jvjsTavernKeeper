import {
	CollectorFilter,
	EmojiIdentifierResolvable,
	Message,
	MessageReaction,
	TextChannel,
	User,
} from 'discord.js';
import Log, { LogUtils } from '../Log';
import { ReactionInteraction } from '../../types/interactions/ReactionInteraction';
// import { interactionRouter } from '../../service/interactions/interactionRouter';
import { DiscordReactions } from '../../types/interactions/DiscordReactions';
import { interactionRouter } from '../../service/interactions/interactionRouter';

export const reactionInteraction = async (
	dEGENInteraction: ReactionInteraction,
	channel: TextChannel,
): Promise<any> => {
	
	Log.debug('start reactionInteraction');
	const { prompt, reactions } = dEGENInteraction;
	const listOfReactions:EmojiIdentifierResolvable[] = createListOfReactions(reactions);
	const messageInteraction: Message = await sendMessage(prompt, channel, listOfReactions);
	// for each emoji in reactions, reply with that emoji
	try {

		if (messageInteraction == null || listOfReactions == null) {
			Log.debug('Did not send button interaction.');
			return;
		}

		const filter: CollectorFilter<[MessageReaction, User]> = (reaction:MessageReaction, user:User): boolean => {
			return listOfReactions.includes(reaction.emoji.name);
		};
        
		const collector = messageInteraction.createReactionCollector({ filter, time:150000 });

		collector.on('collect', (reaction, user) => {

			Log.debug(`Collected ${reaction.emoji.name} from ${user.tag}`);
			if (user.tag === 'jvjsTavernKeeper#8532') {
				return;
			}
			const { functionToCall } = dEGENInteraction.reactions.find(object => object.reaction === reaction.emoji.name);
			interactionRouter(functionToCall, channel, '');
			return reaction;
		});
        
		collector.on('end', collected => {
			Log.debug(`Collected ${collected.size} items`);
		});
        
	} catch (e) {
		LogUtils.logError('Error in reactionInteraction', e);
		return;
	}
};

const sendMessage = async (prompt: string, channel:TextChannel, listOfReactions:EmojiIdentifierResolvable[]): Promise<Message<boolean> | null> => {
	try {
		
		const message: boolean | Message = await channel.send({
			content: prompt,
		});
		for (const reaction of listOfReactions) {
			try {
				const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === reaction || emoji.id === reaction);
				if (reactionEmoji) {
					await message.react(reactionEmoji);
				}
				if (typeof reaction === 'string') {
					await message.react(reaction);
				}
				
			
			} catch (e) {
				Log.debug(e);
			}
		}
		
		return message;
		
	}catch(e) {
		LogUtils.logError('sendMessageWithInteractions failed', e);
		return null;
	}
};

const createListOfReactions = (reactions: DiscordReactions[]) => {
	return reactions.map(emoji => emoji.reaction);
};
