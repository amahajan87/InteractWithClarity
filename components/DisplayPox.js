// SP000000000000000000002Q6VF78/pox.clar
import React, { useState } from "react"
import { cvToString, uintCV, callReadOnlyFunction } from '@stacks/transactions';
import { StacksMainnet } from "@stacks/network";
import { userSession } from './ConnectWallet'

const DisplayPox = () => {
    const network = new StacksMainnet();
    const contractAddress = 'SP000000000000000000002Q6VF78';
    const contractName = 'pox';
    const functionName = 'get-total-ustx-stacked';

    const [rewardCycle, setRewardCycle] = useState()
    const [uStacks, setUStacks] = useState()

    const onChangeInput = (e) => {
        setRewardCycle(e.currentTarget.value)
    }

    const getMicroStacks = async () => {
        const userSessionMainnet = userSession.loadUserData().profile.stxAddress.mainnet;
        const senderAddress = userSessionMainnet;
        const rewardCycleNumber = uintCV(rewardCycle);

        const options = {
            contractAddress,
            contractName,
            functionName,
            functionArgs: [rewardCycleNumber],
            network,
            senderAddress,
        };

        const result = await callReadOnlyFunction(options);
        setUStacks(cvToString(result))
    }

    return <div>
            {
                userSession &&
                <> 
                    <h3>Wanna know how many uSTX are stacked in a reward cycle?</h3>
                    <p>Enter the Reward Cycle: <input type="number" id="rewardCycle" name="rewardCycle" value={rewardCycle} onChange={onChangeInput}></input></p>
                    <br/><button onClick={getMicroStacks} >Click to Find out!</button>
                    <p>Awesome, stacked amount: {uStacks}</p>
                </>
            }
        </div>
}

export default DisplayPox
