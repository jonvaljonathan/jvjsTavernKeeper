import {
	DMChannel,
	Message,
	MessageActionRow,
	MessageSelectMenu,
	User,
} from 'discord.js';
import Log, { LogUtils } from '../Log';
import { MenuInteraction } from '../../types/interactions/MenuInteraction';
import { interactionRouter } from '../../service/interactions/interactionRouter';

export const sendMenuInteraction = async (
	menuInteraction: MenuInteraction,
	channel: DMChannel,
	user:User,
) => {
	
	Log.debug('Menu interaction started');

	const { prompt, menuOptions, functionToCall } = menuInteraction;
	const payload = { channel, user };
    
	const row = new MessageActionRow()
		.addComponents(
			new MessageSelectMenu()
				.setCustomId('select')
				.setPlaceholder('Please Select an Option')
				.addOptions(menuOptions),
		);
	
	try {
		Log.debug('Sending menu interaction to user');
		const message: Message | void = await channel.send({
			content: prompt,
			components: [row],
		}).catch(e => {
			LogUtils.logError('sendMessageWithInteractions failed', e);
			return;
		});
		
		if (message == null) {
			Log.debug('Message does not exist');
			return;
		}
		if (message) {
			await message.awaitMessageComponent({
				filter: args => (args.customId === 'select') && args.user.id == user.id.toString(),
				componentType: 'SELECT_MENU',
				time: 20000,
			})
				.then(async (interaction) => {
					Log.debug(functionToCall);
					if (interaction.customId === 'select') {
						Log.debug('Button Selected');
						const selectedItemDescription = menuOptions[parseInt(interaction.values[0])].description;
						const result = await interactionRouter(functionToCall, payload, selectedItemDescription);
						try {
							Log.debug('Sending result to user.');
							return message.edit({ content: result, components:[] });
						} catch (e) {
							LogUtils.logError('Error reply-ing to interaction', e);
							throw e;
						}
					}
				})
				.catch(error => {
					try {
						message.edit({ content: 'Timeout reached, please reach out to us with any questions!' }).catch(e => {
							Log.warn(e);
							return;
						});
						Log.debug(error?.message);
					} catch (e) {
						LogUtils.logError('gm opt-in message edit occurred', e);
					}
				});
		}
	} catch (e) {
		LogUtils.logError('gm opt-in time/error occurred', e);
		return;
	}
};
	
