const { model, models, Schema, Decimal128 } = require("mongoose");

const accountsScheme = new Schema(
  {
    email: {
      type: String,
      unique: true
    },
    mobile: {
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

const Account = models.Account || model("accounts", accountsScheme);

module.exports = Account;
