import { ChainId } from "../../enums/chain-id";

/**
 * USDT token context
 */
export class USDT {
    /**
     * Get USDT token info
     */
    public static token() {
        return {
            chainId: ChainId.TEST,
            contractAddress: "0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684",
            decimals: 18,
            symbol: "USDT",
            name: "Tether USD",
        };
    }
}
