const { model, models, Schema } = require("mongoose");

const accountsScheme = new Schema(
  {
    accid: {
      type: String,
      unique: true
    },
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
    lastseen: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Account = models.Account || model("accounts", accountsScheme);

module.exports = Account;
