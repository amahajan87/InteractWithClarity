// SP000000000000000000002Q6VF78/pox.clar
import React, { useState } from "react"
import { cvToString, cv, uintCV, callReadOnlyFunction } from '@stacks/transactions';
import { StacksMainnet } from "@stacks/network";
import { userSession } from './ConnectWallet'

const nftData = [
    {
        id: 0,
        name: "Boom NFT 300",
        contractAddress: 'SP1QK1AZ24R132C0D84EEQ8Y2JDHARDR58R72E1ZW',
        contractName: 'boom-nft-300',
    },
    {
        id: 1,
        name: "Bitcoin Monkeys",
        contractAddress: 'SP2KAF9RF86PVX3NEE27DFV1CQX0T4WGR41X3S45C',
        contractName: 'bitcoin-monkeys',
    },
    {
        id: 2,
        name: "Mutant Monkeys",
        contractAddress: 'SP125J1ADVYWGWB9NQRCVGKYAG73R17ZNMV17XEJ7',
        contractName: 'mutant-monkeys',
    },
    {
        id: 3,
        name: "Ghosttown Citizens",
        contractAddress: 'SP1FVFX8HQZPVHS2SBBRDGB8A1G8QCXHAMQAFQV0T',
        contractName: 'ghosttown-citizens',
    },
    {
        id: 4,
        name: "Cloudverse Collectibles",
        contractAddress: 'SP1FVFX8HQZPVHS2SBBRDGB8A1G8QCXHAMQAFQV0T',
        contractName: 'cloudverse-collectibles',
    },
]

const DisplayPox = () => {
    const network = new StacksMainnet();

    const [indexNft, setIndexNft] = useState(0)
    const [selectedNft, setSelectedNft] = useState('boom-nft-300')
    const [lastTokenId, setLastTokenId] = useState()
    const [tokenUri, setTokenUri] = useState()

    const substring = (str, startI, endI) => {
        return str.substring(startI, endI)
    }

    const onNftChanged = (e) => {
        setIndexNft(e.currentTarget.id)
        setSelectedNft(e.currentTarget.value)
    }

    const getNftDetails = async () => {
        const userSessionMainnet = userSession.loadUserData().profile.stxAddress.mainnet;
        const senderAddress = userSessionMainnet;
        const contractAddress = nftData[indexNft].contractAddress
        const contractName = nftData[indexNft].contractName

        const optionsGetLastTokenId = {
            contractName,
            contractAddress,
            functionName: "get-last-token-id",
            functionArgs: [],
            network,
            senderAddress,
        };
        const responseGetLastTokenId = await callReadOnlyFunction(optionsGetLastTokenId);
        const tokenId = cvToString(responseGetLastTokenId.value)
        const x = substring(tokenId, 1, tokenId.length)
        setLastTokenId(x)

        const optionsGetTokenUri = {
            contractAddress,
            contractName,
            functionName: "get-token-uri",
            functionArgs: [uintCV(x)],
            network,
            senderAddress,
        };
        const responseGetTokenUri = await callReadOnlyFunction(optionsGetTokenUri);
        const tokenuri = cvToString(responseGetTokenUri.value)
        const y = substring(tokenuri, 6, tokenuri.length -1)
        setTokenUri(y)
    }

    return <div>
            {
                userSession &&
                <div style={{flexDirection: 'row'}}> 
                    <h3>Find Details about any NFT in the list</h3>
                    <p>First select the NFT you want to find info about:
                        <p>
                    {nftData.map((nft) => {
                        return <><input defaultChecked={nft.name} type="radio" id={nft.id} name={nft.name} value={nft.name} onChange={onNftChanged} checked={selectedNft == nft.name}></input> {nft.name}</>
                    })}
                     </p></p>
                    <br/>
                    <button onClick={getNftDetails} >Click to find NFT Details</button>
                    <p>Last Token Id: {lastTokenId} </p>
                    <p>Token Uri for last token id {tokenUri} </p>
                </div>
            }
        </div>
}

export default DisplayPox
