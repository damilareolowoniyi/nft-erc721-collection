import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'DarkKingdomNFT',
  tokenName: 'DarkKingdomNFT Test',
  tokenSymbol: 'DKNFT',
  hiddenMetadataUri: 'ipfs://QmfCbNWXmHbHKjKCtbodSq699HJbTyQbXJATTRnUHNBDdf/hidden.json',
  maxSupply: 30,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xa72381cB084829bD33905563CA28d99768D6E7f6",
  marketplaceIdentifier: 'my-nft-token', //make sure to update the marketplace identifier to your opensea collection url name
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
