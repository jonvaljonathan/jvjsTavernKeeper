import { TextChannel } from 'discord.js';
import Log from '../../utils/Log';

export const warrior = (channel:TextChannel) => {
	channel.send('You picked warrior!');
	Log.debug('warrior called!');
};