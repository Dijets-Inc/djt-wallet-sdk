import * as bip32 from 'bip32';
import Eth from '@ledgerhq/hw-app-eth';
// @ts-ignore
import AppDjtx from '@obsidiansystems/hw-app-dijets';
import { MIN_EVM_SUPPORT_V } from '@/Wallet/constants';
import { ILedgerAppConfig } from '@/Wallet/types';

/**
 *
 * @param xpub Extended public key for m/44'/60'/0'
 * @param index Index of the Eth address
 * @returns Extended public key for m/44'/60'/0'/0/n where `n` is the address index
 */
export function getEthAddressKeyFromAccountKey(xpub: string, index: number) {
    const node = bip32.fromBase58(xpub).derivePath(`0/${index}`);
    return node.toBase58();
}

export function getAppDjtx(transport: any): AppDjtx {
    return new AppDjtx(transport, 'w0w');
}

export function getAppEth(transport: any): Eth {
    return new Eth(transport, 'w0w');
}

export async function getLedgerConfigDjtx(transport: any): Promise<ILedgerAppConfig> {
    const app = getAppDjtx(transport);
    let config = await app.getAppConfiguration();

    if (!config) {
        throw new Error(`Unable to connect ledger. You must use ledger version ${MIN_EVM_SUPPORT_V} or above.`);
    }

    return config;
}
