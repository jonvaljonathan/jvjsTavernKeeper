import { TextChannel } from 'discord.js';
import Log from '../../utils/Log';

export const wizard = (channel: TextChannel) => {
	channel.send('You picked wizzard!');
	Log.debug('paldin called!');
};