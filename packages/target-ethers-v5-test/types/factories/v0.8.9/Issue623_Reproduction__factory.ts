/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  Issue623_Reproduction,
  Issue623_ReproductionInterface,
} from "../../v0.8.9/Issue623_Reproduction";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "createProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class Issue623_Reproduction__factory {
  static readonly abi = _abi;
  static createInterface(): Issue623_ReproductionInterface {
    return new utils.Interface(_abi) as Issue623_ReproductionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Issue623_Reproduction {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Issue623_Reproduction;
  }
}
