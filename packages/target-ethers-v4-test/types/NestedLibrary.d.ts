/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TypedEventDescription, TypedFunctionDescription } from ".";

interface NestedLibraryInterface extends Interface {
  functions: {
    getValue: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {};
}

export class NestedLibrary extends Contract {
  connect(signerOrProvider: Signer | Provider | string): NestedLibrary;
  attach(addressOrName: string): NestedLibrary;
  deployed(): Promise<NestedLibrary>;

  on(event: EventFilter | string, listener: Listener): NestedLibrary;
  once(event: EventFilter | string, listener: Listener): NestedLibrary;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): NestedLibrary;
  removeAllListeners(eventName: EventFilter | string): NestedLibrary;
  removeListener(eventName: any, listener: Listener): NestedLibrary;

  interface: NestedLibraryInterface;

  functions: {
    getValue(overrides?: UnsignedTransaction): Promise<BigNumber>;

    "getValue()"(overrides?: UnsignedTransaction): Promise<BigNumber>;
  };

  getValue(overrides?: UnsignedTransaction): Promise<BigNumber>;

  "getValue()"(overrides?: UnsignedTransaction): Promise<BigNumber>;

  filters: {};

  estimate: {
    getValue(overrides?: UnsignedTransaction): Promise<BigNumber>;

    "getValue()"(overrides?: UnsignedTransaction): Promise<BigNumber>;
  };
}