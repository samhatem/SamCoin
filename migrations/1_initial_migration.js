const Migrations = artifacts.require('Migrations')
const SamCoin = artifacts.require('SamCoin')

module.exports = function (deployer) {
  deployer.deploy(Migrations)
  deployer.deploy(SamCoin)
}
