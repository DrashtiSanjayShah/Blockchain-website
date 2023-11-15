// https://eth-goerli.g.alchemy.com/v2/9eX5eXrguOjctcgmmfheaaIF3q6qZEUJ

require('@nomiclabs/hardhat-waffle')    //waffle is a plugin for building ethereun test 

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/9eX5eXrguOjctcgmmfheaaIF3q6qZEUJ',
      accounts: ['6ae9b707015e5e4ed4cc1b66404229bd0b00c4db401850dbdda6a80660fd9633']
    }
  }
}



// Transactions deployed to: 0x2927c2bE3081F6E0D608f28dEa36c11b40B0B20A