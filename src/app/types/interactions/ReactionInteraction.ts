import { DiscordReactions } from './DiscordReactions';
export interface ReactionInteraction {
    prompt: string,
    reactions: DiscordReactions[],
}
