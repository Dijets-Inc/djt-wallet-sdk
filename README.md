<div align="center">
  <img src="resources/wallet-sdk.png?raw=true">
</div>

# Dijets Wallet SDK (Beta)

Dijets wallet SDK is a typescript library for creating and managing decentralized wallets.

It provides high level methods to transact on Dijets's Ternary Chains: Value, Utility & Method.

Wallet types supported:

-   Mnemonic Wallets
-   Singleton Wallets
-   Ledger Wallets
-   Public Mnemonic Wallets (Read-Only)

Using the dijets-wallet-sdk developers can:

-   Make Cross-chain transfers
-   Receive and send tokens and NFTs
-   Validation & Delegation
-   Create keystore files from wallet instances
-   Get transaction history of wallets
-   Mint NFTs on Value chain

## Local build

1. Clone the repository.
2. Install dependencies `yarn install`
3. Run for development `yarn start`

## Webpack

For Webpack version 5 and above you must use this plugin with it. https://www.npmjs.com/package/node-polyfill-webpack-plugin
