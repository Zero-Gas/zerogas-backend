export type Account = "evm" | "polkadot";

export type AddUserToListDto = {
  address: string;
  type: Account;
};
