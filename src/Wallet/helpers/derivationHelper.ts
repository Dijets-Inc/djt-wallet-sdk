import { DJTX_TOKEN_PATH, ETH_ACCOUNT_PATH } from '@/Wallet/constants';

/**
 * Given an account number, returns the Dijets account derivation path as a string
 * @param accountIndex
 */
export function getAccountPathDijets(accountIndex: number) {
    if (accountIndex < 0) throw new Error('Account index can not be less than 0.');
    return `${DJTX_TOKEN_PATH}/${accountIndex}'`;
}

/**
 * Returns the string `m/44'/60'/0'/0/n` where `n` is the account index.
 * @param accountIndex
 */
export function getAccountPathEVM(accountIndex: number) {
    if (accountIndex < 0) throw new Error('Account index can not be less than 0.');
    return `${ETH_ACCOUNT_PATH}/0/${accountIndex}`;
}
