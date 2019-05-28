//Configure web3 with a provider from metamask
import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // metamask is running
    web3 = new Web3(window.web3.currentProvider);    
} else {
    // not have metamask
    const provider = new Web3.providers.HttpProvider(
        'rinkeby.infura.io/v3/402014c5be4e43cab02965ca953e90a3'
    );
    web3 = new Web3(provider);
}

export default web3;

