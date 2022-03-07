import Log from '../../utils/Log';
import { warrior } from '../example/warrior';
import { reactionInteraction } from '../../utils/interactionBuilders/reactionInteraction';
import { secondInteraction } from './secondInteraction';
import { thirdInteraction } from './thirdInteraction';
import { xDAIInteraction } from './xDAIInteraction';
import { firstNFTInteraction } from './firstNFTInteraction';
import { secondNFTInteraction } from './secondNFTInteraction';
import { mintNFTInteraction } from './mintNFTInteraction';

export const interactionRouter = async (functionToCall: string, payload:any, selectedItemDescription:string): Promise<any> => {
	Log.debug(selectedItemDescription);
	switch (functionToCall) {
	case 'firstInteraction':
		return warrior(payload);
	
	case 'secondInteraction': {
		return reactionInteraction(secondInteraction, payload);
	}
	case 'thirdInteraction': {
		return reactionInteraction(thirdInteraction, payload);
	}
	case 'xDAIInteraction': {
		return reactionInteraction(xDAIInteraction, payload);
	}
	case 'buildNFT': {
		const primarySkill = await reactionInteraction(firstNFTInteraction, payload);
		const secondarySkill = await reactionInteraction(secondNFTInteraction, payload);
		Log.debug(`primarySkill ${primarySkill}`);
		Log.debug(`primary skill ${secondarySkill}`);
		
		if (primarySkill && secondarySkill) {
			return mintNFTInteraction(primarySkill, secondarySkill);
		}
		break;
	}
	case '': {
		return Log.debug('empty string passed to interaction router');
	}
	default:
		Log.debug('Interaction router did not find a case.');
		await payload.channel.send('Something appears to have gone wrong.');
	}
};
