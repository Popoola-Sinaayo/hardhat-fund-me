const { network } = require("hardhat")
const { networkConfig, developmentChain } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

module.exports = async (hre) => {
    const {
        getNamedAccounts,
        deployments: { deploy, log, get },
    } = hre
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    let ethUsdPriceFeedAddress
    console.log(chainId)
    console.log(network.name)
    if (developmentChain.includes(network.name)) {
        const ethUsdAggregator = await get("MockV3Aggregator")
        ethUsdPriceFeedAddress = ethUsdAggregator.address
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeeds"]
    }
    console.log(ethUsdPriceFeedAddress)
    const args = [ethUsdPriceFeedAddress]
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: args,
        log: true, //
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    if (!developmentChain.includes(network.name)) {
        await verify(fundMe.address, args)
    }
    log("-------------------------------------------------")
}

module.exports.tags = ["all", "fundme"]
