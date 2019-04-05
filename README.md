# TransportationProtocol

Install Ganache
https://truffleframework.com/ganache

install truffle
https://truffleframework.com/docs/truffle/getting-started/installation

install metamask

write our smart contract

Our next goal is to access the smart contract inside the Truffle console. However, we cannot run the Truffle console because our application is not yet connected to the Ganache personal blockchain network we set up in the dependencies section.

we must create a new smart contract any time we make code changes. Luckily Truffle provides a shortcut to assist with this. We can re-run the migrations like this:

$ truffle migrate --reset

You have successfully loaded the client side application. 😃 Notice that your application says "Loading...". That's because we're not logged in to the blockchain yet! In order to connect to the blockchain, we need to import one of the accounts from Ganache into Metamask. You can watch me set up Metamask in the video at 43:55.

Write tests
<img width="1209" alt="Screen Shot 2019-04-05 at 11 31 25 AM" src="https://user-images.githubusercontent.com/7444521/55653127-6017c600-57a2-11e9-9223-300ab3f17766.png">

Create Tasks
The accompanying video footage for this portion of the tutorial begins at 1:05:07.

<img width="356" alt="Screen Shot 2019-04-05 at 1 00 16 PM" src="https://user-images.githubusercontent.com/7444521/55653261-d0bee280-57a2-11e9-811d-80ca79fd26b4.png">


Now you should be able to add new tasks from the client side application! Notice, there is no "submit" button on the form. I left it off to simplify the user interface. You must hit the "enter" key on your keyboard to submit a task. Once you do, you'll see a Metamask confirmation pop up. You must sign this transaction in order to create the task.

<img width="1276" alt="Screen Shot 2019-04-05 at 12 56 49 PM" src="https://user-images.githubusercontent.com/7444521/55653128-61e18980-57a2-11e9-905b-06240be4aa59.png">
