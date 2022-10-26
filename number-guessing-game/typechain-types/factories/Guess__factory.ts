/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Guess, GuessInterface } from "../Guess";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "range",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "guess",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "prize",
        type: "uint256",
      },
    ],
    name: "Colder",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "guess",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "prize",
        type: "uint256",
      },
    ],
    name: "Correct",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "guess",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "prize",
        type: "uint256",
      },
    ],
    name: "Incorrect",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "guess",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "prize",
        type: "uint256",
      },
    ],
    name: "Warmer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "guess",
        type: "uint8",
      },
    ],
    name: "attempt",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "close",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "erc20",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "guessRange",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "prizePool",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620017c8380380620017c88339818101604052810190620000379190620003fe565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600360006101000a81548160ff021916908360ff16021790555080600360016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620000e3620000eb60201b60201c565b5050620006e0565b6000600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016200014a919062000456565b602060405180830381865afa15801562000168573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200018e9190620004ae565b14620001d1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001c89062000567565b60405180910390fd5b60005b6001805490508161ffff1610156200029a5760006002600060018461ffff168154811062000207576200020662000589565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360ff16021790555080806200029190620005f5565b915050620001d4565b5060016000620002ab919062000314565b600360009054906101000a900460ff1660ff164244604051602001620002d392919062000649565b6040516020818303038152906040528051906020012060001c620002f89190620006a8565b600060146101000a81548160ff021916908360ff160217905550565b508054600082559060005260206000209081019062000334919062000337565b50565b5b808211156200035257600081600090555060010162000338565b5090565b600080fd5b600060ff82169050919050565b62000373816200035b565b81146200037f57600080fd5b50565b600081519050620003938162000368565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003c68262000399565b9050919050565b620003d881620003b9565b8114620003e457600080fd5b50565b600081519050620003f881620003cd565b92915050565b6000806040838503121562000418576200041762000356565b5b6000620004288582860162000382565b92505060206200043b85828601620003e7565b9150509250929050565b6200045081620003b9565b82525050565b60006020820190506200046d600083018462000445565b92915050565b6000819050919050565b620004888162000473565b81146200049457600080fd5b50565b600081519050620004a8816200047d565b92915050565b600060208284031215620004c757620004c662000356565b5b6000620004d78482850162000497565b91505092915050565b600082825260208201905092915050565b7f42616c616e6365206d757374206265207a65726f20746f207365742061206e6560008201527f77207461726765742e0000000000000000000000000000000000000000000000602082015250565b60006200054f602983620004e0565b91506200055c82620004f1565b604082019050919050565b60006020820190508181036000830152620005828162000540565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061ffff82169050919050565b60006200060282620005e7565b915061ffff8203620006195762000618620005b8565b5b600182019050919050565b6000819050919050565b620006436200063d8262000473565b62000624565b82525050565b60006200065782856200062e565b6020820191506200066982846200062e565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000620006b58262000473565b9150620006c28362000473565b925082620006d557620006d462000679565b5b828206905092915050565b6110d880620006f06000396000f3fe60806040526004361061004a5760003560e01c806343d726d61461004f578063719ce73e14610059578063785e9e861461008457806380d739ad146100af578063c5c88421146100da575b600080fd5b6100576100f6565b005b34801561006557600080fd5b5061006e6101bd565b60405161007b9190610a58565b60405180910390f35b34801561009057600080fd5b50610099610260565b6040516100a69190610af2565b60405180910390f35b3480156100bb57600080fd5b506100c4610286565b6040516100d19190610b29565b60405180910390f35b6100f460048036038101906100ef9190610b75565b610299565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610184576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017b90610c25565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b6000600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161021a9190610c66565b602060405180830381865afa158015610237573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025b9190610cad565b905090565b600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900460ff1681565b670de0b6b3a7640000600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b81526004016102ff929190610cda565b602060405180830381865afa15801561031c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103409190610cad565b1015610381576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037890610d4f565b60405180910390fd5b6001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330670de0b6b3a76400006040518463ffffffff1660e01b815260040161044b93929190610daa565b6020604051808303816000875af115801561046a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048e9190610e19565b50600060149054906101000a900460ff1660ff168160ff16036105b7573373ffffffffffffffffffffffffffffffffffffffff167f695c2e1209c2b89abbd0d0a105b43faa10522cc662799d5311c4a2cb02ffddc5826104ec6101bd565b6040516104fa929190610e46565b60405180910390a2600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb336105496101bd565b6040518363ffffffff1660e01b8152600401610566929190610e6f565b6020604051808303816000875af1158015610585573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a99190610e19565b506105b26107ed565b6107e9565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905060008060149054906101000a900460ff1660ff168360ff16116106455782600060149054906101000a900460ff166106409190610ec7565b610661565b600060149054906101000a900460ff16836106609190610ec7565b5b905080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360ff16021790555060008260ff1603610724573373ffffffffffffffffffffffffffffffffffffffff167f0fc3373fc15874af726c60482fa0119cb09361a6e1209116f81eab8167105605846107076101bd565b604051610715929190610e46565b60405180910390a250506107ea565b8160ff168160ff16111561078e573373ffffffffffffffffffffffffffffffffffffffff167f0728b8061e4df799b45a25f2391ab918c4e8514fc17e1ed232396d38293e8440846107736101bd565b604051610781929190610e46565b60405180910390a26107e6565b3373ffffffffffffffffffffffffffffffffffffffff167fb310228ab5b0582b06730105614381339dbd513b4b0233afe73194c26307b17c846107cf6101bd565b6040516107dd929190610e46565b60405180910390a25b50505b5b50565b6000600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161084a9190610c66565b602060405180830381865afa158015610867573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088b9190610cad565b146108cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c290610f6e565b60405180910390fd5b60005b6001805490508161ffff16101561098d5760006002600060018461ffff16815481106108fd576108fc610f8e565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360ff160217905550808061098590610fcb565b9150506108ce565b506001600061099c9190610a01565b600360009054906101000a900460ff1660ff1642446040516020016109c2929190611016565b6040516020818303038152906040528051906020012060001c6109e59190611071565b600060146101000a81548160ff021916908360ff160217905550565b5080546000825590600052602060002090810190610a1f9190610a22565b50565b5b80821115610a3b576000816000905550600101610a23565b5090565b6000819050919050565b610a5281610a3f565b82525050565b6000602082019050610a6d6000830184610a49565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610ab8610ab3610aae84610a73565b610a93565b610a73565b9050919050565b6000610aca82610a9d565b9050919050565b6000610adc82610abf565b9050919050565b610aec81610ad1565b82525050565b6000602082019050610b076000830184610ae3565b92915050565b600060ff82169050919050565b610b2381610b0d565b82525050565b6000602082019050610b3e6000830184610b1a565b92915050565b600080fd5b610b5281610b0d565b8114610b5d57600080fd5b50565b600081359050610b6f81610b49565b92915050565b600060208284031215610b8b57610b8a610b44565b5b6000610b9984828501610b60565b91505092915050565b600082825260208201905092915050565b7f4f6e6c79206f776e65722063616e2063616c6c20746869732066756e6374696f60008201527f6e2e000000000000000000000000000000000000000000000000000000000000602082015250565b6000610c0f602283610ba2565b9150610c1a82610bb3565b604082019050919050565b60006020820190508181036000830152610c3e81610c02565b9050919050565b6000610c5082610a73565b9050919050565b610c6081610c45565b82525050565b6000602082019050610c7b6000830184610c57565b92915050565b610c8a81610a3f565b8114610c9557600080fd5b50565b600081519050610ca781610c81565b92915050565b600060208284031215610cc357610cc2610b44565b5b6000610cd184828501610c98565b91505092915050565b6000604082019050610cef6000830185610c57565b610cfc6020830184610c57565b9392505050565b7f436865636b2074686520746f6b656e20616c6c6f77616e63652e000000000000600082015250565b6000610d39601a83610ba2565b9150610d4482610d03565b602082019050919050565b60006020820190508181036000830152610d6881610d2c565b9050919050565b6000819050919050565b6000610d94610d8f610d8a84610d6f565b610a93565b610a3f565b9050919050565b610da481610d79565b82525050565b6000606082019050610dbf6000830186610c57565b610dcc6020830185610c57565b610dd96040830184610d9b565b949350505050565b60008115159050919050565b610df681610de1565b8114610e0157600080fd5b50565b600081519050610e1381610ded565b92915050565b600060208284031215610e2f57610e2e610b44565b5b6000610e3d84828501610e04565b91505092915050565b6000604082019050610e5b6000830185610b1a565b610e686020830184610a49565b9392505050565b6000604082019050610e846000830185610c57565b610e916020830184610a49565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ed282610b0d565b9150610edd83610b0d565b9250828203905060ff811115610ef657610ef5610e98565b5b92915050565b7f42616c616e6365206d757374206265207a65726f20746f207365742061206e6560008201527f77207461726765742e0000000000000000000000000000000000000000000000602082015250565b6000610f58602983610ba2565b9150610f6382610efc565b604082019050919050565b60006020820190508181036000830152610f8781610f4b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061ffff82169050919050565b6000610fd682610fbd565b915061ffff8203610fea57610fe9610e98565b5b600182019050919050565b6000819050919050565b61101061100b82610a3f565b610ff5565b82525050565b60006110228285610fff565b6020820191506110328284610fff565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061107c82610a3f565b915061108783610a3f565b92508261109757611096611042565b5b82820690509291505056fea26469706673582212205bc4ec01f727be9b906054a887014bc51334dc9f333a32f841a6e42707814e2364736f6c63430008110033";

type GuessConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GuessConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Guess__factory extends ContractFactory {
  constructor(...args: GuessConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    range: PromiseOrValue<BigNumberish>,
    tokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Guess> {
    return super.deploy(range, tokenAddress, overrides || {}) as Promise<Guess>;
  }
  override getDeployTransaction(
    range: PromiseOrValue<BigNumberish>,
    tokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(range, tokenAddress, overrides || {});
  }
  override attach(address: string): Guess {
    return super.attach(address) as Guess;
  }
  override connect(signer: Signer): Guess__factory {
    return super.connect(signer) as Guess__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GuessInterface {
    return new utils.Interface(_abi) as GuessInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Guess {
    return new Contract(address, _abi, signerOrProvider) as Guess;
  }
}