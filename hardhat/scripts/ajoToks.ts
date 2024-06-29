import { ethers } from "hardhat";

async function saver() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const AjoToken = await ethers.getContractFactory("AjoToken");
  const ajoToken = await AjoToken.deploy(1000); 
  console.log("Target set to:", ajoToken.target);

      // Target set to: 0xb23d7c6cb567Dae5886b3F855eCDbd7Cd0357fB9


}

saver()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });