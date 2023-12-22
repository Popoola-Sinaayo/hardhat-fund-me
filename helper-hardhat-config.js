const networkConfig = {
    11155111: {
        name: "sepolia",
        ethUsdPriceFeeds: "0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419",
    },
}

const developmentChain = ["hardhat", "localhost"]
const DECIMALS = 8
const INITIAL_ANSWER = 200000000

module.exports = {
    networkConfig,
    developmentChain,
    DECIMALS,
    INITIAL_ANSWER,
}
