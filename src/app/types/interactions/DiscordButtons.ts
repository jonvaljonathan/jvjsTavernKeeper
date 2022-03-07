import { MessageButtonStyle } from 'discord.js';

export interface DiscordButtons {
    label: string,
    style: MessageButtonStyle,
    functionToCall: string,
    successMessage: string,
    failureMessage: string,
}
