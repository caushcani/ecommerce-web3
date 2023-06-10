const CommerceContract = artifacts.require("Commerce");

module.exports = function (deployer) {
  deployer.deploy(CommerceContract);
};
