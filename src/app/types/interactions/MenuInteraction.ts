import { MessageSelectOptionData } from 'discord.js';
export interface MenuInteraction {
    prompt: string,
    menuOptions: MessageSelectOptionData[],
    functionToCall: string,
}
