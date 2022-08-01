# Decentralottery

A minimalistic front end made by using Next.js for [Smart Contract Lottery](https://github.com/0xSanyam/Smart-Contract-Lottery).

![App](/assets/interaction.gif)

- [Example App here!](https://sweet-pond-2118.on.fleek.co/)
- Example App on IPFS: ipfs://QmQAwN276QYfZvRKVgJdqmjQUWncjc8emfBJTjRKX6grXT

Built with using:
- NextJS
- Solidity
- Chainlink
- Moralis
- web3uikit
- Ethers
- Hardhat
- IPFS

## Quickstart

```
git clone https://github.com/0xSanyam/Decentralottery
cd Decentralottery
yarn install
```

## Usage

1. Run your local blockchain with the lottery code

    > In a different terminal / command line

    ```
    git clone https://github.com/0xSanyam/Smart-Contract-Lottery
    cd Smart-Contract-Lottery
    yarn install
    yarn hardhat node
    ```

2. Add hardhat network to your metamask/wallet

    - Get the RPC_URL of your hardhat node (usually `http://127.0.0.1:8545/`)
    - Go to your wallet and add a new network. [See instructions here.](https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC)
    - Network Name: Hardhat-Localhost
    - New RPC URL: http://127.0.0.1:8545/
    - Chain ID: 31337
    - Currency Symbol: ETH (or GO)
    - Block Explorer URL: None

    Ideally, you'd then [import one of the accounts](https://metamask.zendesk.com/hc/en-us/articles/360015489331-How-to-import-an-Account) from hardhat to your wallet/metamask. 

3. Run Decentralottery

    Back in a different terminal with the code from this repo, run:

    ```
    yarn dev
    ```

4. Go to UI and have fun!

    Head over to your [localhost](http://localhost:3000) and play with the lottery!


## Deploying to IPFS

1. Build your static code.

    ```
    yarn build
    ```

2. Export your site

    ```
    yarn next export
    ```

    > Note: Some features of NextJS & Moralis are not static, if you're deviating from this repo, you might run into errors. 

3. Deploy to IPFS

    - [Download IPFS desktop](https://ipfs.io/#install)
    - Open your IPFS desktop app ![Desktop](/assets/ipfs%20desktop.png)
    - Select `import` and choose the folder the above step just created (should be `out`)

4. Copy the CID of the folder you pinned

    ![IPFS CID](/assets/cid.png)

5. Get [IPFS companion](https://chrome.google.com/webstore/detail/ipfs-companion/nibjojkomfdiaoajekhjakgkdhaomnch?hl=en) for your browser (or use [Brave Browser](https://brave.com/))

5. Go to `ipfs://YOUR_CID_HERE` and see your ipfs deployed site!

    ![IPFS Site](/assets/site.png)

    ![Site](/assets/ipfs%20site.png)

## Deploy to IPFS using Fleek

You can also have [Fleek](https://fleek.co/) auto-deploy your website if you connect your github. Connect to fleek and follow along the docs there. You'll get an IPFS hash and a "regular" URL for your site. 
