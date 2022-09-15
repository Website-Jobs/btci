import mongoose from "mongoose";
mongoose.Promise = global.Promise;


const accountsScheme = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true
    },
    password: String,
    firstname: String,
    lastname: String,
    location: {
      address: String,
      city: String,
      state: String,
      country: String,
      zipcode: String,
    },
    account: {
      btc: {
        type: String,
        default: '0'
      },
      usd: {
        type: Number,
        default: 0
      }
    },
    lastseen: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Account = mongoose.models.Account || mongoose.model("Account", accountsScheme);
export default  Account;
