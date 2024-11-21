import { NetworkConfig } from './types';
import { Defaults } from 'dijets/dist/utils';
import { getRpcC, getRpcP, getRpcX } from './helpers/rpcFromConfig';

export const MainnetConfig: NetworkConfig = {
    rawUrl: 'https://api.djtx.network',
    apiProtocol: 'https',
    apiIp: 'api.djtx.network',
    apiPort: 443,
    explorerURL: 'https://explorerapi.djtx.network',
    explorerSiteURL: 'https://explorer.djtx.network',
    networkID: 1,
    // @ts-ignore
    xChainID: Defaults.network[1]['V']['blockchainID'],
    // @ts-ignore
    pChainID: Defaults.network[1]['M']['blockchainID'],
    // @ts-ignore
    cChainID: Defaults.network[1]['U']['blockchainID'],
    // @ts-ignore
    evmChainID: Defaults.network[1]['U']['chainID'],
    // @ts-ignore
    djtxID: Defaults.network[1]['V']['djtxAssetID'],
    get rpcUrl() {
        return {
            c: getRpcC(this),
            p: getRpcP(this),
            x: getRpcX(this),
        };
    },
};

export const TestnetConfig: NetworkConfig = {
    rawUrl: 'https://api.djtx-test.network',
    apiProtocol: 'https',
    apiIp: 'api.djtx-test.network',
    apiPort: 443,
    explorerURL: 'https://explorerapi.djtx-test.network',
    explorerSiteURL: 'https://explorer.djtx-test.network',
    networkID: 5,
    // @ts-ignore
    xChainID: Defaults.network[5]['V']['blockchainID'],
    // @ts-ignore
    pChainID: Defaults.network[5]['M']['blockchainID'],
    // @ts-ignore
    cChainID: Defaults.network[5]['U']['blockchainID'],
    // @ts-ignore
    evmChainID: Defaults.network[5]['U']['chainID'],
    // @ts-ignore
    djtxID: Defaults.network[5]['V']['djtxAssetID'],
    get rpcUrl() {
        return {
            c: getRpcC(this),
            p: getRpcP(this),
            x: getRpcX(this),
        };
    },
};

export const LocalnetConfig: NetworkConfig = {
    rawUrl: 'http://localhost:9650',
    apiProtocol: 'http',
    apiIp: 'localhost',
    apiPort: 9650,
    networkID: 12345,
    // @ts-ignore
    xChainID: Defaults.network[12345]['V']['blockchainID'],
    // @ts-ignore
    pChainID: Defaults.network[12345]['M']['blockchainID'],
    // @ts-ignore
    cChainID: Defaults.network[12345]['U']['blockchainID'],
    // @ts-ignore
    evmChainID: Defaults.network[12345]['U']['chainID'],
    // @ts-ignore
    djtxID: Defaults.network[12345]['V']['djtxAssetID'],
    get rpcUrl() {
        return {
            c: getRpcC(this),
            p: getRpcP(this),
            x: getRpcX(this),
        };
    },
};

// Default network connection
export const DefaultConfig = MainnetConfig;
