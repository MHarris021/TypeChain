/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface DataTypesInputInterface extends ethers.utils.Interface {
  functions: {
    "input_address(address)": FunctionFragment;
    "input_bool(bool)": FunctionFragment;
    "input_bytes(bytes)": FunctionFragment;
    "input_bytes1(bytes1)": FunctionFragment;
    "input_enum(uint8)": FunctionFragment;
    "input_int256(int256)": FunctionFragment;
    "input_int8(int8)": FunctionFragment;
    "input_stat_array(uint8[3])": FunctionFragment;
    "input_string(string)": FunctionFragment;
    "input_struct(tuple)": FunctionFragment;
    "input_tuple(uint256,uint256)": FunctionFragment;
    "input_uint256(uint256)": FunctionFragment;
    "input_uint8(uint8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "input_address",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "input_bool", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "input_bytes",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "input_bytes1",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "input_enum",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "input_int256",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "input_int8",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "input_stat_array",
    values: [[BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "input_string",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "input_struct",
    values: [{ uint256_0: BigNumberish; uint256_1: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "input_tuple",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "input_uint256",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "input_uint8",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "input_address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "input_bool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "input_bytes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_bytes1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "input_enum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "input_int256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "input_int8", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "input_stat_array",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_string",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_struct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_tuple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_uint256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_uint8",
    data: BytesLike
  ): Result;

  events: {};
}

export class DataTypesInput extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DataTypesInputInterface;

  functions: {
    input_address(input1: string, overrides?: CallOverrides): Promise<[string]>;

    "input_address(address)"(
      input1: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    input_bool(input1: boolean, overrides?: CallOverrides): Promise<[boolean]>;

    "input_bool(bool)"(
      input1: boolean,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    input_bytes(
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "input_bytes(bytes)"(
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    input_bytes1(
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "input_bytes1(bytes1)"(
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    input_enum(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "input_enum(uint8)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    input_int256(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "input_int256(int256)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    input_int8(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "input_int8(int8)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    input_stat_array(
      input1: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[[number, number, number]]>;

    "input_stat_array(uint8[3])"(
      input1: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[[number, number, number]]>;

    input_string(input1: string, overrides?: CallOverrides): Promise<[string]>;

    "input_string(string)"(
      input1: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    input_struct(
      input1: { uint256_0: BigNumberish; uint256_1: BigNumberish },
      overrides?: CallOverrides
    ): Promise<
      [[BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }]
    >;

    "input_struct((uint256,uint256))"(
      input1: { uint256_0: BigNumberish; uint256_1: BigNumberish },
      overrides?: CallOverrides
    ): Promise<
      [[BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }]
    >;

    input_tuple(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    "input_tuple(uint256,uint256)"(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    input_uint256(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "input_uint256(uint256)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    input_uint8(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "input_uint8(uint8)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;
  };

  input_address(input1: string, overrides?: CallOverrides): Promise<string>;

  "input_address(address)"(
    input1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  input_bool(input1: boolean, overrides?: CallOverrides): Promise<boolean>;

  "input_bool(bool)"(
    input1: boolean,
    overrides?: CallOverrides
  ): Promise<boolean>;

  input_bytes(input1: BytesLike, overrides?: CallOverrides): Promise<string>;

  "input_bytes(bytes)"(
    input1: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  input_bytes1(input1: BytesLike, overrides?: CallOverrides): Promise<string>;

  "input_bytes1(bytes1)"(
    input1: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  input_enum(input1: BigNumberish, overrides?: CallOverrides): Promise<number>;

  "input_enum(uint8)"(
    input1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  input_int256(
    input1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "input_int256(int256)"(
    input1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  input_int8(input1: BigNumberish, overrides?: CallOverrides): Promise<number>;

  "input_int8(int8)"(
    input1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  input_stat_array(
    input1: [BigNumberish, BigNumberish, BigNumberish],
    overrides?: CallOverrides
  ): Promise<[number, number, number]>;

  "input_stat_array(uint8[3])"(
    input1: [BigNumberish, BigNumberish, BigNumberish],
    overrides?: CallOverrides
  ): Promise<[number, number, number]>;

  input_string(input1: string, overrides?: CallOverrides): Promise<string>;

  "input_string(string)"(
    input1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  input_struct(
    input1: { uint256_0: BigNumberish; uint256_1: BigNumberish },
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }
  >;

  "input_struct((uint256,uint256))"(
    input1: { uint256_0: BigNumberish; uint256_1: BigNumberish },
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }
  >;

  input_tuple(
    input1: BigNumberish,
    input2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  "input_tuple(uint256,uint256)"(
    input1: BigNumberish,
    input2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  input_uint256(
    input1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "input_uint256(uint256)"(
    input1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  input_uint8(input1: BigNumberish, overrides?: CallOverrides): Promise<number>;

  "input_uint8(uint8)"(
    input1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  callStatic: {
    input_address(input1: string, overrides?: CallOverrides): Promise<string>;

    "input_address(address)"(
      input1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    input_bool(input1: boolean, overrides?: CallOverrides): Promise<boolean>;

    "input_bool(bool)"(
      input1: boolean,
      overrides?: CallOverrides
    ): Promise<boolean>;

    input_bytes(input1: BytesLike, overrides?: CallOverrides): Promise<string>;

    "input_bytes(bytes)"(
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    input_bytes1(input1: BytesLike, overrides?: CallOverrides): Promise<string>;

    "input_bytes1(bytes1)"(
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    input_enum(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "input_enum(uint8)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    input_int256(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "input_int256(int256)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_int8(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "input_int8(int8)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    input_stat_array(
      input1: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[number, number, number]>;

    "input_stat_array(uint8[3])"(
      input1: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[number, number, number]>;

    input_string(input1: string, overrides?: CallOverrides): Promise<string>;

    "input_string(string)"(
      input1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    input_struct(
      input1: { uint256_0: BigNumberish; uint256_1: BigNumberish },
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }
    >;

    "input_struct((uint256,uint256))"(
      input1: { uint256_0: BigNumberish; uint256_1: BigNumberish },
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }
    >;

    input_tuple(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    "input_tuple(uint256,uint256)"(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    input_uint256(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "input_uint256(uint256)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_uint8(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "input_uint8(uint8)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {};

  estimateGas: {
    input_address(
      input1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "input_address(address)"(
      input1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_bool(input1: boolean, overrides?: CallOverrides): Promise<BigNumber>;

    "input_bool(bool)"(
      input1: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_bytes(
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "input_bytes(bytes)"(
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_bytes1(
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "input_bytes1(bytes1)"(
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_enum(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "input_enum(uint8)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_int256(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "input_int256(int256)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_int8(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "input_int8(int8)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_stat_array(
      input1: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "input_stat_array(uint8[3])"(
      input1: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_string(input1: string, overrides?: CallOverrides): Promise<BigNumber>;

    "input_string(string)"(
      input1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_struct(
      input1: { uint256_0: BigNumberish; uint256_1: BigNumberish },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "input_struct((uint256,uint256))"(
      input1: { uint256_0: BigNumberish; uint256_1: BigNumberish },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_tuple(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "input_tuple(uint256,uint256)"(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_uint256(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "input_uint256(uint256)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_uint8(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "input_uint8(uint8)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    input_address(
      input1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "input_address(address)"(
      input1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_bool(
      input1: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "input_bool(bool)"(
      input1: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_bytes(
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "input_bytes(bytes)"(
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_bytes1(
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "input_bytes1(bytes1)"(
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_enum(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "input_enum(uint8)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_int256(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "input_int256(int256)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_int8(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "input_int8(int8)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_stat_array(
      input1: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "input_stat_array(uint8[3])"(
      input1: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_string(
      input1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "input_string(string)"(
      input1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_struct(
      input1: { uint256_0: BigNumberish; uint256_1: BigNumberish },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "input_struct((uint256,uint256))"(
      input1: { uint256_0: BigNumberish; uint256_1: BigNumberish },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_tuple(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "input_tuple(uint256,uint256)"(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_uint256(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "input_uint256(uint256)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_uint8(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "input_uint8(uint8)"(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}