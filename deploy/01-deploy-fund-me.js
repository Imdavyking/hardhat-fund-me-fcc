// // import

// function deployFunc() {
//   console.log("Hi");
// }

const { networkConfig } = require("../helper-hardhat-config");
const { network } = require("hardhat");

// module.exports.default = deployFunc;
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  console.log(chainId);

  // when going for localhost hardhat network we want to use a mock.
  const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];

  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: [],
    log: true,
  });
};
