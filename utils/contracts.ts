import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { CONTRACT_ABI } from "./contractABI";

const contractAddress = "0x99E7548e0B86faEd06eCfC08334fA54051D9f852";

export const contract = getContract({
    client: client,
    chain: chain,
    address: contractAddress,
    abi: CONTRACT_ABI,
});