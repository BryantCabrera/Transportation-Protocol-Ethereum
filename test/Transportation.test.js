const Transportation = artifacts.require('./Transportation.sol')

contract('Transportation', (accounts) => {
  before(async () => {
    this.transportation = await Transportation.deployed()
  })

  it('deploys successfully', async () => {
    const address = await this.transportation.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  it('lists transports', async () => {
    const transportCount = await this.transportation.transportCount()
    const transport = await this.transportation.transports(transportCount)
    assert.equal(transport.upc.toNumber(), transportCount.toNumber())
    assert.equal(transport.movement, "Automobile")
    assert.equal(transport.origin, "Washington DC")
    assert.equal(transport.destination, "Los Angeles, CA")
    assert.equal(transportCount.toNumber(), 1)
  })

  it('creates transport', async () => {
    const result = await this.transportation.createTransport("human", "Ontario, Canada", "Atlanta, GA, USA")
    const transportCount = await this.transportation.transportCount()
    assert.equal(transportCount, 2)
    const event = result.logs[0].args
    assert.equal(event.upc.toNumber(), 2)
    assert.equal(event.movement, "human")
    assert.equal(event.origin, "Ontario, Canada")
    assert.equal(event.destination, "Atlanta, GA, USA")
  })
})