// eslint-disable-next-line node/no-missing-import
import CollectionConfigInterface from "../lib/CollectionConfigInterface";
import whitelistAddresses from "./whitelist.json";

const CollectionConfig: CollectionConfigInterface = {
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: "StellaTest",
  tokenName: "Stella Test",
  tokenSymbol: "ST",
  hiddenMetadataUri:
    "ipfs://Qma9stiVAvYC5UtCYuJnWyhugJdcaQaTVXxPuG4Dn6PFsu/hidden.json",
  maxSupply: 40,
  whitelistSale: {
    price: 0.02,
    maxMintAmountPerTx: 20,
  },
  preSale: {
    price: 0.02,
    maxMintAmountPerTx: 20,
  },
  publicSale: {
    price: 0.02,
    maxMintAmountPerTx: 20,
  },
  contractAddress: "0x1CEe5cc389C2Cc114fA8342c463b549Be5F0A889",
  openSeaSlug: "my-nft-token",
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
