const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compileCampaing = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaingAddress;
let campaing;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
     .deploy({ data: compiledFactory.bytecode })
     .sent({ from: accounts[0], gas: '1000000' });
});