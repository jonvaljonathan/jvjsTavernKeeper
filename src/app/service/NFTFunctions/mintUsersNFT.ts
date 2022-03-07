import Log from '../../utils/Log';
import { ethers } from 'ethers';
import { abi } from '../../contracts/Raider.json';
export const mintUsersNFT = async (discordUserId: string, primaryRole: string, secondaryRole: string) => {

	const privateKey = process.env.BOT_PRIVATE_KEY;

	const provider = ethers.providers.getDefaultProvider('rinkeby');
	const wallet = new ethers.Wallet(privateKey, provider);
	const address = process.env.CONTRACT_ADDRESS;
	const Raider = new ethers.Contract(address, abi, wallet);

	const ownerAddress = process.env.TEST_ADDRESS;

	const raider = await Raider.Raiders(discordUserId);
	//let skill = uri;

};