// https://eth-ropsten.alchemyapi.io/v2/4g_Xe7OxaTBMmvHXmcTjNTGpFgT8_b_s

require('@nomiclabs/hardhat-waffle');
require("dotenv").config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/4g_Xe7OxaTBMmvHXmcTjNTGpFgT8_b_s',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};