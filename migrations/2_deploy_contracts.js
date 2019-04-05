var Transportation = artifacts.require("./Transportation.sol");

module.exports = function(deployer) {
  deployer.deploy(Transportation);
};