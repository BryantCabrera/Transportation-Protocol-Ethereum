# Transportation Protocol on the Ethereum Blockchain

Follow these steps to get a dapp on the Ethereum public testnet up and running.  The application presents you with a simple web interface that takes in the information related to the item you want transported.  The data is written to the chain we have deployed on the Ropsten network.

While following these steps will get you an up and running dapps there are still a few things missing.  For starters, we cannot confirm what has been added nor is it listed.  Do not feel constrained just to improve the existing code base.  Be adventurous and innovative and create a decentralized application that solves a problem in the real world.

#### First we need to install our dependencies

[Install Ganache](https://truffleframework.com/ganache).  Your test blockchain that can be run on several networks and is currently configured with this project to give you access to wallet address and test Ether.

[Install Truffle](https://truffleframework.com/docs/truffle/getting-started/installation).  Development framework for Ethereum that will assist with the coding, comilation, migration, and deployment of your smart contracts.

[Install MetaMask](https://metamask.io/). Browser extension where we can interact with our blockchain through Chrome.

#### Write our smart contract

Before we get started modifying our smart contracts in the `contracts` folder we need to provide a test environment where we will have access to the data we need to get the project started.  Opening Ganache is all you need to do.

<img width="1148" alt="Screen Shot 2019-04-05 at 5 37 30 PM" src="https://user-images.githubusercontent.com/7444521/55662583-8d2b9f00-57c9-11e9-8c53-98a803153429.png">

We must create a new smart contract any time we make code changes. Luckily Truffle provides a shortcut to assist with this. We can re-run the migrations like this:

In your command line navigate to the root folder for Ethereum Protocol and run `truffle migrate --reset`

You have successfully loaded the client side application! 

Notice that your application says "Loading...". That's because we're not logged in to the blockchain yet! In order to connect to the blockchain, we need to import one of the accounts from Ganache into Metamask. You can watch me set up Metamask in this video at [43:55](https://youtu.be/rzvk2kdjr2I?t=43m55s).

#### Don't forget to run your tests

These can be found in the folder labeled `test` and run using the `truffle test` command in your console.

<img width="1209" alt="Screen Shot 2019-04-05 at 11 31 25 AM" src="https://user-images.githubusercontent.com/7444521/55653127-6017c600-57a2-11e9-9223-300ab3f17766.png">

Once we're sure everything works, now you're ready for the application to be seen in your browser!
`npm run dev` this will run your local node and front-end on the address and port specified in the `truffle-config.js` file.

<img width="1276" alt="Screen Shot 2019-04-05 at 12 56 49 PM" src="https://user-images.githubusercontent.com/7444521/55653128-61e18980-57a2-11e9-905b-06240be4aa59.png">

- Enter the data in the input fields
- Click submite
- You'll see a Metamask confirmation pop up. You must sign this transaction in order to create the task.

<img width="356" alt="Screen Shot 2019-04-05 at 1 00 16 PM" src="https://user-images.githubusercontent.com/7444521/55653261-d0bee280-57a2-11e9-811d-80ca79fd26b4.png">

.env and connecting to Infura
don't forget npm install dotenv

successfully deploy to ropsten test network iwth HDWalletProvider

Interact with with the contracts that you've deployed on the Mainnet
Use infura as a remote node
