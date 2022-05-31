export enum ChainId {
  BSC = 56,
  TEST = 97,
}

export const ChainNames = new Map<number, string>([
  [ChainId.BSC, "bsc"],
  [ChainId.TEST, "test-net"],
]);
