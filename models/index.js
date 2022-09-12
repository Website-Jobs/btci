const { connection, connect } = require("mongoose");
const Account = requier("./accounts");

const uri = process.env.MONGOOSE_URI || "mongodb://localhost:27017/SHQDB_LOCAL";

export const accounts = Account;

mongoose.connect(uri, {
  useNewUrlParser: true
}).then((result) => { })
  .catch((err) => { });


// export const dbase = () => {
//   // const db = mongoose.connection;
//   // db.on("error", (error) => {
//   //   console.log(`Error connecting to database.`);
//   // });
//   // db.once("open", () => {
//   //   console.log(`Connexion to dabatase successfull.`);
//   // });
// };
