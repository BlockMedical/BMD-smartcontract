module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  // contracts_build_directory: "./build/contracts",
  networks: {
    development: {
      host: "ganache",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 4700000
    },
    ropstan: {
      provider: function() {
        return new HDWalletProvider(process.env.MNENOMIC, "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY, 1);
      },
      network_id: 3,
      gas: 4000000, // Gas limit used for deploys
      gasPrice: 1000000000
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(process.env.MNENOMIC, "https://rinkeby.infura.io/v3/" + process.env.INFURA_API_KEY, 1);
      },
      network_id: 4,
      gas: 4000000, // Gas limit used for deploys
      gasPrice: 1000000000
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(process.env.MNENOMIC, "https://mainnet.infura.io/v3/" + process.env.INFURA_API_KEY, 0);
      },
      network_id: 1,
    },
  }
};
