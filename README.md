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

We must create a new smart contract any time we make code changes. 
````
truffle compile
truffle migrate
````

**You've successfully deployed your contract to the blockchain**.  The code you have just written has just been compiled down to an Application Binary Interface (ABI) and codified onto the blockchain the same way a bitcoin or address is.  We can no longer modify with this code.  Luckily Truffle provides a shortcut to assist with this. We can re-run the migrations like this:

In your command line navigate to the root folder for Ethereum Protocol and run `truffle migrate --reset`

Notice that your application says "Loading...". That's because we're not logged in to the blockchain yet! In order to connect to the blockchain, we need to import one of the accounts from Ganache into Metamask. You can watch me set up Metamask in this video at [43:55](https://youtu.be/rzvk2kdjr2I?t=43m55s).

### Don't forget to run your tests

These can be found in the folder labeled `test` and run using the `truffle test` command in your console.

<img width="1209" alt="Screen Shot 2019-04-05 at 11 31 25 AM" src="https://user-images.githubusercontent.com/7444521/55653127-6017c600-57a2-11e9-9223-300ab3f17766.png">

### Running the client

Once we're sure everything works, now you're ready for the application to be seen in your browser!
`npm run dev` this will run your local node and front-end on the address and port specified in the `truffle-config.js` file.

<img width="1276" alt="Screen Shot 2019-04-05 at 12 56 49 PM" src="https://user-images.githubusercontent.com/7444521/55653128-61e18980-57a2-11e9-905b-06240be4aa59.png">

- Enter the data in the input fields
- Click submite
- You'll see a Metamask confirmation pop up. You must sign this transaction in order to create the task.

<img width="356" alt="Screen Shot 2019-04-05 at 1 00 16 PM" src="https://user-images.githubusercontent.com/7444521/55653261-d0bee280-57a2-11e9-811d-80ca79fd26b4.png">

### Deploying to the public blockchain

Currently you are having to manage your own Ethereum node locally in order to interact with your smart contract.  In order for our applications to scale they need to be modular in a way they can be accessed by the public.

Infura can be used as a remote node. So take the time right now to sign up for free and create a new project.  Once that is finished install the `npm install dotenv` module so we can hide our secrets in a file titled `.env` which we will place in our route directroy.  It takes two steps:
- Store the variables `INFURA_API_KEY` which can be found when you click into your created project as **ProjectId** and `MNEMONIC` which you can get from your test blockchain.  Here we get it from Ganache
- Then we reference them we access them in our `truffle-config.js`

<img width="845" alt="Screen Shot 2019-04-05 at 5 48 50 PM" src="https://user-images.githubusercontent.com/7444521/55662822-13e17b80-57cc-11e9-9f72-07310b04709d.png">

<img width="1150" alt="Screen Shot 2019-04-05 at 5 55 21 PM" src="https://user-images.githubusercontent.com/7444521/55662837-31aee080-57cc-11e9-894b-97a7b2278e02.png">

<img width="997" alt="Screen Shot 2019-04-05 at 5 48 20 PM" src="https://user-images.githubusercontent.com/7444521/55662821-10e68b00-57cc-11e9-95ff-a0e4bf8f519b.png">

The last thing you need to do is run the command line `truffle migrate --reset --network ropsten`.  Your application is ready and transactions can be searched for on the Ropsten Blockchain using a website such as EtherScan.




