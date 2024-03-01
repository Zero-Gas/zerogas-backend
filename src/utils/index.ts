import { decodeAddress, encodeAddress } from "@polkadot/keyring";
import { hexToU8a, isHex } from "@polkadot/util";
import { ethers } from "ethers";
import { Account } from "../services/list/dto";

const _isValidAddressPolkadotAddress = (address: string) => {
  try {
    encodeAddress(isHex(address) ? hexToU8a(address) : decodeAddress(address));

    return true;
  } catch (error) {
    return false;
  }
};

export const validateAddress = (address: string, type: Account) => {
  let isValid;
  if (type === "evm") {
    isValid = ethers.isAddress(address);
  } else {
    isValid = _isValidAddressPolkadotAddress(address);
  }
  return isValid;
};
