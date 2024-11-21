import { UniversalNodeAbstract } from '@/UniversalTx/UniversalNode';
import { ExportChainsP } from '@/Wallet/types';
import {
    UniversalTxActionExportP,
    UniversalTxActionImportP,
    UniversalTxExportP,
    UniversalTxImportP,
} from '@/UniversalTx/types';
import { BN } from 'dijets';

export default class UniversalNodeP extends UniversalNodeAbstract {
    constructor(balance: BN, feeExport: BN, feeImport: BN) {
        super(balance, 'M', feeExport, feeImport);
    }

    buildExportTx(destChain: ExportChainsP, amount: BN): UniversalTxExportP {
        return super.buildExportTx(destChain, amount) as UniversalTxExportP;
    }

    buildImportTx(sourceChain: ExportChainsP): UniversalTxImportP {
        return super.buildImportTx(sourceChain) as UniversalTxImportP;
    }

    getExportMethod(to: ExportChainsP): UniversalTxActionExportP {
        if (to === 'V') {
            return 'export_p_x';
        } else {
            return 'export_p_c';
        }
    }

    getImportMethod(from: ExportChainsP): UniversalTxActionImportP {
        if (from === 'V') {
            return 'import_x_p';
        } else {
            return 'import_c_p';
        }
    }
}
