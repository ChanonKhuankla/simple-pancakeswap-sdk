import { ChainId } from "../../enums/chain-id";

/**
 * BNB token context
 */
export class BNB {
    /**
     * Get BNB token info
     */
    public static token() {
        return {
            chainId: ChainId.TEST,
            contractAddress: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
            decimals: 18,
            symbol: "WBNB",
            name: "Wrapped Binance token",
        };
    }
}
