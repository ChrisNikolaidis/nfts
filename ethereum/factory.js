import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instace = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xAaae2f887543F03AAC81A3d62D4A7987c7e28521'
);

export default instace;