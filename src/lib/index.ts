import mongoose from "mongoose";
import { MONGOOSE_URI } from "../configs";

export default function () {
  mongoose
    .connect(MONGOOSE_URI)
    .then(() => {
      console.log("Connected to Mongooose");
    })
    .catch((error) => {
      console.error("Error connecting to Mongoose:", error);
    });
}
