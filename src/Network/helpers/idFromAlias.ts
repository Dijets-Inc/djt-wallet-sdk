import { ChainIdType } from '@/common';
import { cChain, pChain, xChain } from '@/Network/network';

/**
 * Given a chain alias, returns the chain id.
 * @param alias `X`, `P` or `C`
 */
export function chainIdFromAlias(alias: ChainIdType) {
    if (alias === 'V') {
        return xChain.getBlockchainID();
    } else if (alias === 'M') {
        return pChain.getBlockchainID();
    } else if (alias === 'U') {
        return cChain.getBlockchainID();
    }
    throw new Error('Unknown chain alias.');
}
