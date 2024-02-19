import { model, models, Schema } from "mongoose";
import { IUserModel } from "../types";

const UserSchema = new Schema<IUserModel>(
  {
    address: String,
  },
  {
    timestamps: true,
  }
);
const User = models.User || model("User", UserSchema);
export default User;
