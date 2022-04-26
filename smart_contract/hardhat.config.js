// https://eth-ropsten.alchemyapi.io/v2/4g_Xe7OxaTBMmvHXmcTjNTGpFgT8_b_s

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/4g_Xe7OxaTBMmvHXmcTjNTGpFgT8_b_s',
      accounts: ['1b975b8820d8888a02f71e5048004d47c0b5e8fb3d63266af2f0621b4b458afb'],
    },
  },
};