import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instace = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xdFa933c8f493e81111f424EA5B99A4B92530e845'
);

export default instace;