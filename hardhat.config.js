require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")
require("@nomicfoundation/hardhat-toolbox")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("@nomicfoundation/hardhat-toolbox")
require("@nomiclabs/hardhat-ethers")
// require("@nomiclabs/hardhat-etherscan")
// require("@nomicfoundation/hardhat-verify")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [
            { version: "0.6.7", settings: {} },
            { version: "0.8.19", settings: {} },
        ],
    },
    // defaultNetwork: "sepolia",
    networks: {
        sepolia: {
            url: "https://eth-sepolia.g.alchemy.com/v2/8m3QCNN_WrOZo_U6L_Gd5ohnXC2nMRVK",
            accounts: [
                "16df9779e78d97eb5dcf4796c00ff434be57e95864d488df74e876aa0e63cb69",
            ],
            chainId: 11155111,
            blockConfirmations: 5
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-reporter.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: "6f7fe3fa-7e0b-4347-86c5-44b2fbd77264",
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
    etherscan: {
        apiKey: "SN6IJC1HJPMMD3HSR5PAYK2ZDX67AZAI5S",
    },
}
