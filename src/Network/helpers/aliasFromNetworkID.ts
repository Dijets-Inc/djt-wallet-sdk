import { ChainIdType } from '@/common';
import { activeNetwork } from '@/Network/network';

/**
 * Given the chain ID returns the chain alias
 * @param id Chain id
 */
export function idToChainAlias(id: string): ChainIdType {
    if (id === activeNetwork.xChainID) {
        return 'V';
    } else if (id === activeNetwork.pChainID) {
        return 'M';
    } else if (id === activeNetwork.cChainID) {
        return 'U';
    }
    throw new Error('Unknown chain ID.');
}
