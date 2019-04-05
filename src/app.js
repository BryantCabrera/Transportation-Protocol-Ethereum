App = {
    loading: false,
    contracts: {},
  
    load: async () => {
      await App.loadWeb3()
      await App.loadAccount()
      await App.loadContract()
      await App.render()
    },
  
    // https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
    loadWeb3: async () => {
      if (typeof web3 !== 'undefined') {
        App.web3Provider = web3.currentProvider
        web3 = new Web3(web3.currentProvider)
      } else {
        window.alert("Please connect to Metamask.")
      }
      // Modern dapp browsers...
      if (window.ethereum) {
        window.web3 = new Web3(ethereum)
        try {
          // Request account access if needed
          await ethereum.enable()
          // Acccounts now exposed
          web3.eth.sendTransaction({/* ... */})
        } catch (error) {
          // User denied account access...
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        App.web3Provider = web3.currentProvider
        window.web3 = new Web3(web3.currentProvider)
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */})
      }
      // Non-dapp browsers...
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }
    },
  
    loadAccount: async () => {
      // Set the current blockchain account
      App.account = web3.eth.accounts[0]
    },
  
    loadContract: async () => {
      // Create a JavaScript version of the smart contract
      const transportation = await $.getJSON('Transportation.json')
      App.contracts.Transportation = TruffleContract(transportation)
      App.contracts.Transportation.setProvider(App.web3Provider)
  
      // Hydrate the smart contract with values from the blockchain
      App.transportation = await App.contracts.Transportation.deployed()
    },
  
    render: async () => {
      // Prevent double render
      if (App.loading) {
        return
      }
  
      // Update app loading state
      App.setLoading(true)
  
      // Render Account
      $('#account').html(App.account)
  
      // Render Tasks
      await App.renderTasks()
  
      // Update loading state
      App.setLoading(false)
    },

    createTransport: async () => {
        App.setLoading(true)
        const movement = $('#newTransportType').val()
        const origin = $('#newTransportOrigin').val()
        const dest = $('#newTransportDest').val()
        await App.transportation.createTransport(movement, origin, dest)
        window.location.reload()
      },
  
    renderTasks: async () => {
      // Load the total transport count from the blockchain
      const transportCount = await App.transportation.transportCount()
      const $template = $('.template')
  
      // Render out each task with a new task template
      for (var i = 1; i <= transportCount; i++) {
        // Fetch the task data from the blockchain
        const transport = await App.transportation.transports(i)
        const transportId = transport[0].toNumber()
        const transportMovement = transport[1]
        const transportOrigin = transport[2]
        const transportDest = transport[3]
  
        // Create the html for the task
        const $newTemplate = $template.clone()
        
        /* if you want to add a click listener to these items
        $newTemplate.find('.content').html(transportMovement)
        //bound to view
        $newTemplate.find('input')
                        .prop('name', transportId)
                        .prop('checked', transportMovement)
                        .on('click', App.toggleCompleted) */
  
        // Show the task
        $newTemplate.show()
      }
    },
  
    setLoading: (boolean) => {
      App.loading = boolean
      const loader = $('#loader')
      const content = $('#content')
      if (boolean) {
        loader.show()
        content.hide()
      } else {
        loader.hide()
        content.show()
      }
    }
  }
  
  $(() => {
    $(window).load(() => {
      App.load()
    })
  })