require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { INFURA_API_KEY, MNEMONIC } = process.env;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    sepolia: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: MNEMONIC
        },
        providerOrUrl: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
        addressIndex: 0,
        chainId: 11155111,
      }),
      network_id: "11155111",
      gas: 5000000,
      networkCheckTimeout: 100000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
};
