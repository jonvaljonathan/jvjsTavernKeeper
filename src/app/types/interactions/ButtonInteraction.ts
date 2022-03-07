import { DiscordButtons } from './DiscordButtons';
export interface ButtonInteraction {
    prompt: string,
    buttons: DiscordButtons[],
}
