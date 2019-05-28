import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instace = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xb88c7568cd46456e329d63b4d2987d24be04fd0e'
);

export default instace;