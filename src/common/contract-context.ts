import { JsonFragment } from "@ethersproject/abi";

export class ContractContext {
  /**
   * The pancakeswap router address
   */
  public static routerAddress = "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3";

  /**
   * The pancakeswap factory address
   */
  public static factoryAddress = "0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc";

  /**
   * The pancakeswap pair address
   */
  public static pairAddress = "0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc";

  /**
   * PancakeSwap v2 router
   */
  public static routerAbi: JsonFragment[] = require("../ABI/pancakeswap-router-v2.json");

  /**
   * PancakeSwap v2 factory
   */
  public static factoryAbi: JsonFragment[] = require("../ABI/pancakeswap-factory-v2.json");

  /**
   * PancakeSwap v2 pair
   */
  public static pairAbi: JsonFragment[] = require("../ABI/pancakeswap-pair-v2.json");

  /**
   * ERC20 abi
   */
  public static erc20Abi: JsonFragment[] = require("../ABI/erc-20-abi.json");
}
