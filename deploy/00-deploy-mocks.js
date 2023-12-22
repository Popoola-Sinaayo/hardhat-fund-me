const { network } = require("hardhat")
const {
    developmentChain,
    DECIMALS,
    INITIAL_ANSWER,
} = require("../helper-hardhat-config")

module.exports = async (hre) => {
    const {
        getNamedAccounts,
        deployments: { deploy, log },
    } = hre
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    // if (chainId)
    console.log(network.name)
    if (developmentChain.includes(network.name)) {
        log("Local Network Detected ......")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSWER],
        })
        log("Mocks Deployed ......")
        log("-----------------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
