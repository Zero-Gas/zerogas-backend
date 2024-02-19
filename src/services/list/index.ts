import { Request, Response } from "express";
import { ethers } from "ethers";
import { AddUserToListDto } from "./dto";
import User from "../../models/user";

export const addUserToList = async (req: Request, res: Response) => {
  try {
    const data: AddUserToListDto = req.body;

    //check valid address
    if (!ethers.isAddress(data.address)) {
      //throw new Error("Address is not valid!");
      return res.status(400).json({ message: "Address is not valid!" });
    }

    // check user
    const user = await User.findOne({ address: data.address });
    if (user) {
      //throw new Error("Address already exists!");
      return res.status(400).json({ message: "Address already exists!" });
    }

    await User.create({ address: data.address });

    return res.json({ message: "Success" });
  } catch (error: any) {
    // throw new Error(error.message);
    res.status(400).json({ message: error.message });
  }
};
