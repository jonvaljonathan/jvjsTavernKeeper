import { TextChannel } from 'discord.js';
import Log from '../../utils/Log';

export const paladin = (channel: TextChannel) => {
	channel.send('You picked paladin!');
	Log.debug('paldin called!');
};