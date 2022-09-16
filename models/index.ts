import mongoose, { Model } from "mongoose";
import Account from "./accounts";

const { MONGOOSE_URI } = process.env;

export const dbCon = async () => {
  const conn = await mongoose
    .connect(MONGOOSE_URI as string)
    .then((go) => {
      console.log(go);
    })
    .catch((err) => console.log(err));
  console.log("Mongoose Connection Established");

  return { conn, Account };
};
