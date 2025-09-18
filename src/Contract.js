// src/contract.js
import { ethers } from "ethers";
import SupplyChainAbi from "../src/apis/SupplyChain.json"; 

export const CONTRACT_ADDRESS = "0x2409f2948f73d97457610896EA17776eFEDD1e98";

// Returns contract (with signer if withSigner = true)
export async function getContract(withSigner = false) {
  if (!window.ethereum) throw new Error("MetaMask not detected");

  const provider = new ethers.BrowserProvider(window.ethereum);
  let contract;

  if (withSigner) {
    const signer = await provider.getSigner();
    contract = new ethers.Contract(CONTRACT_ADDRESS, SupplyChainAbi.abi, signer);
  } else {
    contract = new ethers.Contract(CONTRACT_ADDRESS, SupplyChainAbi.abi, provider);
  }

  return contract;
}