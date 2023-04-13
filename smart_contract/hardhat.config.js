require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.18',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/vEdtuwQrMc9Ptj774JiDEMeKvEY3y2DC',
      accounts: ['account2'],
    }
  }
};
