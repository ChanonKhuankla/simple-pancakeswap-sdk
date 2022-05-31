import { ChainId } from "../../enums/chain-id";

/**
 * DAI token context
 */
export class DAI {
    public static MAINNET() {
        return {
            chainId: ChainId.TEST,
            contractAddress: "0x8a9424745056Eb399FD19a0EC26A14316684e274",
            decimals: 18,
            symbol: "DAI",
            name: "Dai Stablecoin",
        };
    }

    /**
     * Get DAI token info
     */
    public static token() {
        return {
            chainId: ChainId.TEST,
            contractAddress: "0x8a9424745056Eb399FD19a0EC26A14316684e274",
            decimals: 18,
            symbol: "DAI",
            name: "Dai Stablecoin",
        };
    }
}
