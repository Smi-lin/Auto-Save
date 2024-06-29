import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying AutoSaver contract with the account:", deployer.address);

    const AutoSaver = await ethers.getContractFactory("AutoSaver");
    const autoSaver = await AutoSaver.deploy("0xb23d7c6cb567Dae5886b3F855eCDbd7Cd0357fB9");
     // Deploy the contract 

    console.log("Target set to:", autoSaver.target);

    // Target set to:  0x6718d6FB89181496345682efe2b69060Ba68C263
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});