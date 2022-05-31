import { ChainId } from "../../enums/chain-id";

/**
 * USDC token context
 */
export class USDC {
    /**
     * Get USDC token info
     */
    public static token() {
        return {
            chainId: ChainId.TEST,
            contractAddress: "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7",
            decimals: 18,
            symbol: "USDC",
            name: "USD Coin",
        };
    }
}
