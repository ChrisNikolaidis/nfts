import React, { Component } from 'react';
import factory from '../ethereum/factory';


class CampaignIndex extends Component {
    async componentDidMount() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        console.log(campaigns);
    }

    render() {
        return <div>Campaign Index!</div>
    }
}

export default CampaignIndex;


