const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");


async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so whitelistContract here is a factory for instances of our Whitelist contract.
  */

  // Address of the whitelist contract that you deployed in the previous module
  const cryptoDevsContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

  const cryptoDevTokenContract = await ethers.getContractFactory("CryptoDevToken");

  // deploy the contract
  const deployedCryptoDevTokenContract = await cryptoDevTokenContract.deploy(
    cryptoDevsContract
  );
  
  // Wait for it to finish deploying
  await deployedCryptoDevTokenContract.deployed();

  // print the address of the deployed contract
  console.log(
    "CryptoDevToken Contract Address:",
    deployedCryptoDevTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });