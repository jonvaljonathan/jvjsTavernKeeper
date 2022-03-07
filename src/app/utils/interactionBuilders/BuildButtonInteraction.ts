import {
	DMChannel,
	Message,
	MessageActionRow,
	MessageButton,
	User,
} from 'discord.js';
import Log, { LogUtils } from '../Log';
import { ButtonInteraction } from '../../types/interactions/ButtonInteraction';
import { interactionRouter } from '../../service/interactions/interactionRouter';

export const BuildButtonInteraction = async (
	buttonInteraction: ButtonInteraction,
	user:User,
	channel:DMChannel,
): Promise<any> => {
	Log.debug('start sendButtonInteraction');
	const { prompt, buttons } = buttonInteraction;
	const payload = { channel, user };

	const messageButtons: MessageButton[] = buttons.map((button, i) => {
		return new MessageButton()
			.setCustomId(i.toString())
			.setLabel(button.label)
			.setStyle(button.style);
	});
	const row = new MessageActionRow().addComponents(messageButtons);
	const message: Message | void = await channel.send({
		content: prompt,
		components: [row],
	}).catch(e => {
		LogUtils.logError('sendMessageWithInteractions failed', e);
		return;
	});
        
	if (message == null || !message) {
		Log.debug('Did not send button interaction.');
		return;
	}
        
	// 5 minute timeout
	try {
		const buttonIds = messageButtons.map(button => button.customId);
		await message.awaitMessageComponent({
			filter: args => (args.customId in buttonIds) && args.user.id == user.id.toString(),
			time: 20000,
		}).then(async (interaction) => {
			const { functionToCall, successMessage } = buttons[parseInt(interaction.customId)];
			await interactionRouter(functionToCall, payload, '');
			return message.edit({ content: successMessage, components: [] });

		}).catch(error => {
			try {
				message.edit({ content: 'Timeout reached, please reach out to us with any questions!', components: [] }).catch(e => {
					Log.warn(e);
					return;
				});
				Log.debug(error?.message);
			} catch (e) {
				LogUtils.logError('Error in sendButtonInteraction', e);
			}
		});
	} catch (e) {
		LogUtils.logError('Error in sendButtonInteraction', e);
		return;
	}
};
