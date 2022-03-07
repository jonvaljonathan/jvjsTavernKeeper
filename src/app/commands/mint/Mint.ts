import {
	CommandContext,
	SlashCommand,
	SlashCreator,
} from 'slash-create';
import Log, { LogUtils } from '../../utils/Log';
import client from '../../app';
import { reactionInteraction } from '../../utils/interactionBuilders/reactionInteraction';
import { firstInteraction } from '../../service/interactions/firstInteraction';
import { TextChannel } from 'discord.js';

export default class Mint extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: 'mint',
			description: 'test minting an nft!',
			defaultPermission: true,
			guildIDs:['900156319082893352', '911481186013040673'],
		});
	}
	
	async run(ctx: CommandContext): Promise<any> {
		LogUtils.logCommandStart(ctx);
		const guild = await client.guilds.fetch(ctx.guildID);
		// const channel: Channel = await client.channels.fetch(ctx.channelID) as Channel;
		const guildMember = await guild.members.fetch(ctx.user.id);
		const channel: TextChannel | null | void = await guildMember.guild.channels.fetch(ctx.channelID).catch(Log.warn) as TextChannel;

		return await reactionInteraction(firstInteraction, channel);
}
