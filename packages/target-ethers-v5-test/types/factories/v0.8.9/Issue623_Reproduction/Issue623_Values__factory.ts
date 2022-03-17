/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  Issue623_Values,
  Issue623_ValuesInterface,
} from "../../../v0.8.9/Issue623_Reproduction/Issue623_Values";

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
];

export class Issue623_Values__factory {
  static readonly abi = _abi;
  static createInterface(): Issue623_ValuesInterface {
    return new utils.Interface(_abi) as Issue623_ValuesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Issue623_Values {
    return new Contract(address, _abi, signerOrProvider) as Issue623_Values;
  }
}
