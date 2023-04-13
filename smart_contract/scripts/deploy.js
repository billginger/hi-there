const hre = require('hardhat');

async function main() {
  const demoFactory = await hre.ethers.getContractFactory('Demo');
  const demoContract = await demoFactory.deploy();

  await demoContract.deployed();

  console.log('Demo address:', demoContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
